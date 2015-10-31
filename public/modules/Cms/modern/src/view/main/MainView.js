/**
 * The main view
 * @author Dean Clow
 */

Ext.define('Cms.view.main.MainView', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
    title: 'test',
    layout: 'fit',
    items: [{
        xtype: 'panel',
        width: '100%',
        title: 'test',
        html: 'hi'
    }]
});