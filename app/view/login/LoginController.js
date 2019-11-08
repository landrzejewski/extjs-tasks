Ext.define("Tasks.view.login.LoginController", {
  extend: "Ext.app.ViewController",
  alias: "controller.login",
  securityService: Tasks.service.SecurityService,
  onLoginSuccess: function() {
    this.fireEvent("user-is-authenticated", { status: "authenticated" });
  },
  onLoginError: function() {
    Ext.Msg.alert(Tasks.L10n("alert"), Tasks.L10n("authenticationFailure"));
  },
  onLogin: function() {
    const login = this.lookup("username").getValue();
    const password = this.lookup("password").getValue();
    this.securityService.login({ login, password })
      .then(this.onLoginSuccess, this.onLoginError, () => {}, this);
  }
});
