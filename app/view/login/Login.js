Ext.define('Tasks.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype : 'login', 
    controller: 'login',
    modal: true,
    floatable: true,
    closable: false,
    autoShow: true,
    bodyPadding: 20,
    width: 400,
    title: Tasks.L10n('loginForm'),
    defaults: {
        xtype: 'textfield',
        width: '100%',
        labelAlign: 'top'
    },
    items: [
        {
            fieldLabel: Tasks.L10n('login')
        },
        {
            fieldLabel: Tasks.L10n('password'),
            inputType: 'password'
        }
    ],
    buttons: [
        {
            text: Tasks.L10n('ok')
        }
    ]
});
