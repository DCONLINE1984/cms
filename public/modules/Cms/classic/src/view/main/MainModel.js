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
                            height: '900',
                            id: 'blogpost'+(i+1)
                        });
                    }
                }
            }
        },
        pages: {
            model           : 'Cms.model.Pages',
            pageSize        : 1000,
            autoLoad        : true,
            listeners: {
                load: function(store, records) {
                    //load the blog posts into the app
                    var container = Ext.getCmp("leftNavStaticPages");
                    container.removeAll();
                    for(var i=0;i<records.length;i++){
                        var record = records[i];
                        if(parseInt(record.data.showOnMenu)==0){
                            continue;
                        }
                        container.add({
                            xtype: 'button',
                            text: records[i].data.title,
                            pageId: records[i].data.id,
                            iconCls: 'x-fa fa-square-o',
                            width: '100%',
                            handler: 'loadPage',
                            textAlign: 'left',
                            margin: '0 0 3 0'
                        });
                    }
                }
            }
        },
        customCss: {
            model           : 'Cms.model.CustomCss',
            pageSize        : 1000,
            autoLoad        : false
        }
    }
});