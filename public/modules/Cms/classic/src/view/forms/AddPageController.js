/**
 * The add page controller
 * @author Dean Clow
 */

Ext.define("Cms.view.forms.AddPageController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addpage',
    
    /**
     * Submit a blog post
     * @returns void
     */
    submit: function() {
        var url = '/pagebuilder/addpage';
        var mode = this.getView().mode;
        var pageId = this.getView().pageId;
        var checked = (Ext.getCmp("addPage_showOnMenu").getValue())? 1 : 0;
        var parameters = {
            content     : Ext.getCmp("addPageBody").getValue(),
            title       : Ext.getCmp("addPage_title").getValue(),
            mode        : mode,
            showOnMenu  : checked,
            id          : pageId
        };
        console.log(parameters);
        Ext.Ajax.request({
            url: url,
            params: parameters,
            method: 'POST',
            success: function(response) {
                Ext.getCmp("mainview").getController().pageManagement();
                var vm = Ext.getCmp("mainview").getController().getViewModel();
                vm.getStore("pages").load();
                var message = Ext.Msg.alert('Success', 'Page updated successfully', Ext.emptyFn);
                setTimeout(function() {
                    try{
                        message.hide();
                    }catch(e){}
                }, 4000);
                Ext.getCmp("addPageModal").destroy();
            },
            failure: function(response) {
                Ext.Msg.alert('An error occurred', 
                              'Failed to save', 
                              Ext.emptyFn);
            }
        });
    }
});