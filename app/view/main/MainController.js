Ext.define("Tasks.view.main.MainController", {
  extend: "Ext.app.ViewController",
  alias: "controller.main",
  securityService: Tasks.service.SecurityService,
  routes: {
    login: "showLogin",
    tasks: {
      before: "authorize",
      action: "showTasks"
    }
  },
  listen: {
    controller: {
      login: {
        "user-is-authenticated": "onUserIsAuthenticated"
      }
    }
  },
  authenticationStatus: "none",
  onUserIsAuthenticated: function(payload) {
    this.authenticationStatus = payload.status;
    this.redirectTo("tasks", false);
  },
  authorize: function() {
    const routerAction = arguments[1] || arguments[0];
    if (this.authenticationStatus === "authenticated") {
      routerAction.resume();
    } else {
      routerAction.stop();
      this.redirectTo("login", true);
    }
  },
  showLogin: function() {
    this.showViewWithAlias("login");
  },
  showTasks: function() {
    this.showViewWithAlias("tasks");
  },
  showViewWithAlias: function(alias) {
    const view = Ext.widget(alias);
    this.showView(view);
  },
  showView: function(view) {
    const panel = this.getView();
    panel.removeAll();
    panel.add(view);
  },
  onLogout: function() {
    this.securityService.logout();
  }
});
