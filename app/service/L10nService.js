Ext.define(
  "Tasks.service.L10nService",
  {
    singleton: true,
    language: "pl",
    translate: function(key) {
      return this[this.language][key] || `Key ${key} not found`;
    },
    en: {
      title: "Tasks",
      name: "Name",
      description: "Description",
      dueDate: "Due date",
      isCompleted: "Is completed",
      loginForm: "Login form",
      login: "Login",
      password: "Password",
      ok: "Ok",
      logout: "Logout",
      alert: "Alert",
      authenticationFailure: "Invalid login or password"
    },
    pl: {
      title: "Zadania",
      name: "Nazwa",
      description: "Opis",
      dueDate: "Temin",
      isCompleted: "Zakończone",
      loginForm: "Formularz logowania",
      login: "Login",
      password: "Hasło",
      ok: "Ok",
      logout: "Wyloguj",
      alert: "Uwaga",
      authenticationFailure: "Niepoprawny login lub hasło"
    }
  },
  function() {
    Tasks.L10n = this.translate.bind(this);
  }
);
