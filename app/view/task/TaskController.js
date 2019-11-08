Ext.define("Tasks.view.task.TaskController", {
  extend: "Ext.app.ViewController",
  alias: "controller.task",
  initViewModel: function(viewModel) {
    const task = Ext.create('Tasks.model.TaskModel');
    task.data.id = null;
    viewModel.set('task', task);
  },
  onCancel: function() {
    this.redirectTo("tasks", false);
  },
  onSave: function() {
    const task = this.getViewModel().get('task');
    console.log(task.getValidation().data);
    if (task.isValid()) {
        task.save();
        this.redirectTo('tasks', false);
    } else {
        Ext.Msg.alert(Tasks.L10n('alert'), Tasks.L10n('validationError'));
    }
  }
});
