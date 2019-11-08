Ext.define("Tasks.view.main.Main", {
  extend: "Ext.panel.Panel",
  xtype: "app-main",
  requires: [
    "Tasks.service.L10nService" // wymusza kolejność ładowania
  ],
  controller: "main",
  title: "Tasks manager"
});
