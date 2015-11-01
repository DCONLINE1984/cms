/**
 * The add post controller
 * @author Dean Clow
 */

Ext.define("Cms.view.forms.AddPostController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addpost',
    
    /**
     * Submit a blog post
     * @returns void
     */
    submit: function() {
        var url = '/blogpost/addblogpost';
        var mode = this.getView().mode;
        var blogId = this.getView().blogId;
        var parameters = {
            content     : Ext.getCmp("txtBody").getValue(),
            tags        : Ext.getCmp("tags").getValue(),
            mode        : mode,
            id          : blogId
        };
        console.log(url);
        Ext.Ajax.request({
            url: url,
            params: parameters,
            method: 'POST',
            success: function(response) {
                var message = Ext.Msg.alert('Success', 'Post updated successfully', Ext.emptyFn);
                setTimeout(function() {
                    try{
                        message.hide();
                    }catch(e){}
                }, 4000);
                
                var vm          = Ext.getCmp("mainview").getViewModel();
                var store       = vm.getStore("blogposts"); //load the days of week
                store.load();
                Ext.getCmp("blogModal").destroy();
            },
            failure: function(response) {
                Ext.Msg.alert('An error occurred', 
                              'Failed to save', 
                              Ext.emptyFn);
            }
        });
    }
});