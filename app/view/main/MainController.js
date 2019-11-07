Ext.define("Tasks.view.main.MainController", {
  extend: "Ext.app.ViewController",
  alias: "controller.main",
  routes: {
    login: "showLogin",
    tasks: "showTasks"
  },
  showLogin: function() {
    this.showViewWithAlias('login');
  },
  showTasks: function() {
    this.showViewWithAlias('tasks');
  },
  showViewWithAlias: function(alias) {
    const view = Ext.widget(alias);
    this.showView(view);
  },
  showView: function(view) {
    const panel = this.getView();
    panel.removeAll();
    panel.add(view);
  }
});
