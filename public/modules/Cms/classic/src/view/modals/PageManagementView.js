/**
 * The add post form
 * @author Dean Clow
 */

Ext.define('Cms.view.modals.PageManagementView',{
    xtype: 'pagemanagement',
    extend: 'Ext.form.Panel',
    requires: ["Cms.view.grids.PageGridView",
               "Cms.view.modals.PageManagementController",
               "Cms.view.forms.AddPage"],
    controller: 'pagemanagement',
    layout: 'vbox',
    width: '100%',
    padding: '10 10 10 10',
    items: [{
        xtype: 'button',
        text: 'Add Page',
        iconCls: 'x-fa fa-plus',
        handler: 'addPage',
        margin: '0 0 10 0'
    }, {
        xtype: 'pageGrid',
        id: 'pageGrid',
        bind        : {
            store: '{pages}'
        }
    }]
});