Ext.define('Tasks.view.main.Main', {
  extend: 'Ext.panel.Panel',
  requires: [
    'Tasks.store.TasksStore',
  ],
  xtype: 'app-main',
  controller: 'main',
  title: 'Tasks manager',
  items: [
    {
      xtype: 'grid',
      title: 'Tasks',
      store: {
        type: 'TasksStore'
      },
      columns: [
        {
          text: 'Name',
          dataIndex: 'name',
          flex: 1
        },
        {
          text: 'Description',
          dataIndex: 'description',
          flex: 2
        },
        {
          text: 'Due date',
          dataIndex: 'dueDate',
          flex: 1,
          renderer: Ext.util.Format.dateRenderer('d/m/Y')
        },
        {
          xtype: 'checkcolumn',
          text: 'Is completed',
          dataIndex: 'isCompleted',
          flex: 1
        }
      ]
    }
  ]
});
