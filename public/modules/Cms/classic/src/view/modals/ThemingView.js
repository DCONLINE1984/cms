/**
 * The theming view
 * @author Dean Clow
 */

Ext.define('Cms.view.modals.ThemingView',{
    xtype: 'theming',
    extend: 'Ext.form.Panel',
    controller: 'theming',
    layout: 'vbox',
    width: '100%',
    padding: '10 10 10 10',
    items: [{
        xtype: 'button',
        text: 'Reset to default',
        handler: 'resetToDefault',
        margin: '0 0 10 0',
        width: '100%'
    }, {
        xtype: 'panel',
        html: '<span style="color:red;"><strong>REMEMBER:</strong> You may need to use !important</p>'
    }, {
        xtype: 'textareafield',
        width: '100%',
        height: 350,
        id: 'customCss'
    }, {
        xtype: 'button',
        text: 'Update',
        handler: 'update',
        width: '100%'
    }]
});