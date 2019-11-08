Ext.define("Tasks.view.tasks.Tasks", {
  extend: "Ext.grid.Panel",
  xtype: "tasks",
  controller: "tasks",
  title: Tasks.L10n("title"),
  store: {
    type: "TasksStore"
  },
  columns: [
    {
      xtype: 'task-name-column',
      text: Tasks.L10n("name"),
      dataIndex: "name",
      flex: 1
    },
    {
      text: Tasks.L10n("description"),
      dataIndex: "description",
      flex: 2
    },
    {
      text: Tasks.L10n("dueDate"),
      dataIndex: "dueDate",
      flex: 1,
      renderer: Ext.util.Format.dateRenderer("d/m/Y")
    },
    {
      xtype: "checkcolumn",
      text: Tasks.L10n("isCompleted"),
      dataIndex: "isCompleted",
      flex: 1,
      listeners: {
        checkchange: "onTaskCompletedChange"
      }
    }
  ],
  listeners: {
    itemdblclick: "onEditTask"
  }
});
