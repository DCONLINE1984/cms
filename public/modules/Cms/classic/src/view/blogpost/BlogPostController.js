/**
 * The blog post controller
 * @author Dean Clow
 */

Ext.define("Cms.view.blogpost.BlogPostController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.blogpost',
    
    /**
     * Edit a blog post
     * @returns void
     */
    edit: function() {
        var me      = this;
        var blogId  = me.getView().getBlogId();
        var window = new Ext.Window({
            padding: 10,
            id: 'blogModal',
            closable: true,
            title: 'Edit blog entry',
            height: 550,
            modal: true,
            width: '90%',
            items: [{
                xtype: 'addpost',
                blogId: blogId,
                mode: 'edit',
                id: 'addBlogPost'
            }]
        });
        
        var store = Ext.getCmp("addBlogPost").getViewModel().getStore("blogpost");
        store.getProxy().extraParams = ({ id: blogId });
        store.load({
            callback: function() {
                var item = store.data.items[0].data;
                Ext.getCmp("tags").setValue(item.tags);
                Ext.getCmp("txtBody").setValue(item.html);
                window.show();
            }
        });
    },
    
    /**
     * Delete a blog post
     * @returns void
     */
    delete: function() {
        Ext.MessageBox.confirm('Confirmation', 'Are you sure ... ?', confirmFunction);
        var me = this;
        function confirmFunction (btn) {
            if (btn == 'yes'){
                var url = '/blogpost/deletepost';
                var blogId = me.getView().blogId;
                var parameters = {
                    id          : blogId
                };
                console.log(url);
                Ext.Ajax.request({
                    url: url,
                    params: parameters,
                    method: 'POST',
                    success: function(response) {
                        var message = Ext.Msg.alert('Success', 'Post deleted successfully', Ext.emptyFn);
                        setTimeout(function() {
                            try{
                                message.hide();
                            }catch(e){}
                        }, 4000);

                        var vm          = Ext.getCmp("mainview").getViewModel();
                        var store       = vm.getStore("blogposts"); //load the blog posts again
                        store.load();
                    },
                    failure: function(response) {
                        Ext.Msg.alert('An error occurred', 
                                      'Failed to delete', 
                                      Ext.emptyFn);
                    }
                });
            }
        }
    }
});