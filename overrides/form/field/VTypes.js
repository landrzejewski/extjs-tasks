Ext.define('Tasks.overrides.form.field.VTypes', {
    override: 'Ext.form.field.VTypes',
    postalcode: function(value) {
        return /^\d{2}-\d{3}$/.test(value);
    },
    postalcodeText: 'Invalid postal code',
    postalcodeMask: /[\d-]/
});
