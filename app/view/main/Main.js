Ext.define("Tasks.view.main.Main", {
  extend: "Ext.panel.Panel",
  xtype: "app-main",
  requires: [
    "Tasks.service.L10nService" // wymusza kilejność ładowania
  ],
  controller: "main",
  title: "Tasks manager"
});
