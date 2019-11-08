Ext.define("Tasks.view.task.TaskViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.task",
  formulas: {
    taskTitle: {
      bind: {
        nameValue: "{task.name}"
      },
      get: function(data) {
        return data.nameValue || "My task";
      }
    }
  },
  data: {}
});
