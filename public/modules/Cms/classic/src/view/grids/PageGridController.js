/**
 * The page grid controller
 * @author Dean Clow
 */

Ext.define("Cms.view.grids.PageGridController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pagegrid',
    
    editPage: function(element) {
        new Ext.Window({
            padding: 10,
            closable: true,
            title: 'Edit a page',
            id: 'addPageModal',
            autoScroll: true,
            y: 50, 
            anchor: "100% 100%", 
            modal: true,
            width: '90%',
            items: [{
                xtype: 'addpage',
                pageId: element.pageId,
                mode: 'edit'
            }]
        }).show();
        //now load the defaults for the above
        var store = Ext.getCmp("mainview").getController().getViewModel().getStore("pages");
        record = store.findRecord('id', element.pageId);
        Ext.getCmp("addPage_title").setValue(record.data.title);
        Ext.getCmp("addPageBody").setValue(record.data.content);
        Ext.getCmp("addPage_showOnMenu").setValue(record.data.showOnMenu);
        //destroy the modal window
        Ext.getCmp("pageManagementModal").destroy();
    },
    
    deletePage: function(element) {
        var me = this;
        var vm = this.getViewModel();
        var url = '/pagebuilder/deletepage';
        var parameters = {
            id          : element.pageId
        };
        Ext.Msg.show({
            title: 'Confirmation',
            msg: 'Are you sure you want to delete this page?',
            buttons: Ext.Msg.YESNO,
            fn: function (btn){
                if (btn == 'yes'){
                    Ext.Ajax.request({
                        url: url,
                        params: parameters,
                        method: 'POST',
                        success: function(response) {
                            //reload the stores
                            Ext.getCmp("pageGrid").getController().getViewModel().getStore("pages").load();
                            Ext.getCmp("mainview").getController().getViewModel().getStore("pages").load();
                            //output message to user
                            var message = Ext.Msg.alert('Success', 'Page deleted successfully', Ext.emptyFn);
                            setTimeout(function() {
                                try{
                                    message.hide();
                                }catch(e){}
                            }, 4000);
                        },
                        failure: function(response) {
                            Ext.Msg.alert('An error occurred', 
                                          'Failed to save', 
                                          Ext.emptyFn);
                        }
                    });
                }
            }
        });
    }
});