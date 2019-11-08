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
    this.getViewModel().get('task').save();
    this.redirectTo("tasks", false);
  }
});
