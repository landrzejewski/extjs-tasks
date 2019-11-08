Ext.define("Tasks.view.tasks.TasksControler", {
  extend: "Ext.app.ViewController",
  alias: "controller.tasks",
  onEditTask: function(component, task) {
    this.redirectTo(`task/${task.getId()}`, false);
  },
  onTaskCompletedChange: function(componet, rowIndex, checked, record) {
    // this.getView().getStore().getAt(rowIndex).save();
    record.save();
  }
});
