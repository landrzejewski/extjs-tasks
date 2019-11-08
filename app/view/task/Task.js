Ext.define("Tasks.view.task.Task", {
  extend: "Ext.form.Panel",
  xtype: "task",
  controller: "task",
  viewModel: {
    type: "task"
  },
  bind: {
    title: "{taskTitle}"
  },
  bodyPadding: 100,
  defaults: {
    xtype: "textfield",
    width: "100%",
    labelAlign: "top",
    msgTarget: "under"
  },
  items: [
    {
      fieldLabel: Tasks.L10n("name"),
      bind: "{task.name}",
      allowBlank: false
      //vtype: 'postalcode'
    },
    {
      fieldLabel: Tasks.L10n("description"),
      bind: "{task.description}"
    },
    {
      xtype: "datefield",
      fieldLabel: Tasks.L10n("dueDate"),
      bind: "{task.dueDate}"
    }
  ],
  buttons: [
    {
      text: Tasks.L10n("cancel"),
      listeners: {
        click: "onCancel"
      }
    },
    {
      text: Tasks.L10n("save"),
      listeners: {
        click: "onSave"
      },
      formBind: true
    }
  ]
});
