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
      save: "Save",
      cancel: "Cancel",
      logout: "Logout",
      alert: "Alert",
      task: "Task",
      authenticationFailure: "Invalid login or password",
      newTask: "New task"
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
      save: "Zapisz",
      cancel: "Anuluj",
      logout: "Wyloguj",
      alert: "Uwaga",
      task: "Zadanie",
      authenticationFailure: "Niepoprawny login lub hasło",
      newTask: "Nowe zadanie"
    }
  },
  function() {
    Tasks.L10n = this.translate.bind(this);
  }
);
