/**
 * The main model
 * @author Dean Clow
 */

Ext.define("Cms.view.main.MainModel", {
    extend  : 'Ext.app.ViewModel',
    alias   : 'viewmodel.mainmodel',
    requires: ['Cms.model.BlogPosts'],
    stores: {
        blogposts: {
            model           : 'Cms.model.BlogPosts',
            pageSize        : 1000,
            autoLoad        : true,
            listeners: {
                load: function(store, records) {
                    //load the blog posts into the app
                    var container = Ext.getCmp("blogPostContainer");
                    container.removeAll();
                    for(var i=0;i<records.length;i++){
                        var record = records[i];
                        container.add({
                            xtype: 'blogpost',
                            blogContent: records[i].data.html,
                            blogId: records[i].data.id,
                            height: 'auto',
                            id: 'blogpost'+(i+1)
                        });
                    }
                }
            }
        }
    }
});