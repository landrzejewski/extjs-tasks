Ext.define("Tasks.Api", {
  singleton: true,
  profile: "dev",
  dev: {
    baseUrl: "http://localhost:3000"
  },
  prod: {
    baseUrl: "http://training.pl"
  },
  getProfile: function() {
    return this[this.profile];
  },
  tasks: function() {
    return `${this.getProfile().baseUrl}/tasks`;
  },
  auth: function() {
    return `${this.getProfile().baseUrl}/auth/token`;
  }
});
