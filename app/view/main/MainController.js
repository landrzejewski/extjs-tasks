Ext.define("Tasks.view.main.MainController", {
  extend: "Ext.app.ViewController",
  alias: "controller.main",
  securityService: Tasks.service.SecurityService,
  routes: {
    login: "showLogin",
    tasks: {
      before: "authorize",
      action: "showTasks"
    },
    "task/:id": {
      before: "authorize",
      action: "showTask",
      condition: {
        ":id": "(\\d+)"
      }
    },
    "new-task": {
      before: "authorize",
      action: "showNewTask"
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
  showTask: function(id) {
    function onTaskLoaded(task) {
      const form = Ext.widget("task");
      form.getViewModel().set("task", task);
      this.showView(form);
    }

    Tasks.model.TaskModel.load(id, {
      success: onTaskLoaded,
      scope: this
    });
  },
  showNewTask: function() {
    this.showViewWithAlias("task");
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
  onNewTask: function() {
    this.redirectTo("new-task", false);
  },
  onLogout: function() {
    this.securityService.logout();
  }
});
