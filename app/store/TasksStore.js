Ext.define("Tasks.store.TasksStore", {
  extend: "Ext.data.Store",
  alias: "store.TasksStore",
  model: "Tasks.model.TaskModel",
  autoLoad: true
});
