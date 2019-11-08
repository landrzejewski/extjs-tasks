Ext.define("Tasks.view.main.Main", {
  extend: "Ext.panel.Panel",
  xtype: "app-main",
  requires: [
    "Tasks.service.L10nService", // wymusza kolejność ładowania
    "Tasks.service.SecurityService",
    "Tasks.Api"
  ],
  controller: "main",
  title: "Tasks manager",
  tbar: [
    {
      xtype: "button",
      text: Tasks.L10n("newTask"),
      listeners: {
        click: "onNewTask"
      }
    },
    "->", // Ext.Toolbar.Fill
    {
      xtype: "button",
      text: Tasks.L10n("logout"),
      listeners: {
        click: "onLogout"
      }
    }
  ]
});
