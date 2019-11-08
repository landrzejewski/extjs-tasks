Ext.define("Tasks.proxy.SecuredRestProxy", {
  extend: "Ext.data.proxy.Rest",
  alias: "proxy.secured-rest",
  doRequest: function() {
    this.headers = this.headers || {};
    this.headers["Authorization"] = Tasks.service.SecurityService.token;
    this.callParent(arguments);
  }
});
