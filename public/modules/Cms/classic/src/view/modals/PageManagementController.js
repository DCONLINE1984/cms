/**
 * The page management controller
 * @author Dean Clow
 */

Ext.define("Cms.view.modals.PageManagementController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pagemanagement',
    
    /**
     * Add a new page
     * @returns void
     */
    addPage: function() {
        new Ext.Window({
            padding: 10,
            closable: true,
            title: 'Add a page',
            id: 'addPageModal',
            autoScroll: true,
            y: 50, 
            anchor: "100% 100%", 
            modal: true,
            width: '90%',
            items: [{
                xtype: 'addpage'
            }]
        }).show();
        Ext.getCmp("pageManagementModal").destroy();
    }
});