Ext.define("Tasks.service.SecurityService", function() {
  function onLoginSuccess(response) {
    const token = Ext.JSON.decode(response.responseText).token;
    Tasks.service.SecurityService.token = token;
  }
  function login(credentials) {
    return Ext.Ajax.request({
      url: Tasks.Api.auth(),
      method: "post",
      jsonData: credentials
    }).then(onLoginSuccess);
  }
  function logout() {
    window.location.hash = "";
    window.location.reload();
  }
  return {
    singleton: true,
    login,
    logout // logout:logout
  };
});
