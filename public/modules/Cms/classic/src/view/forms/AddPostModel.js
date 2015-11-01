/**
 * The add post model
 * @author Dean Clow
 */

Ext.define("Cms.view.forms.AddPostModel", {
    extend  : 'Ext.app.ViewModel',
    alias   : 'viewmodel.addpost',
    stores: {
        blogpost: {
            model: "Cms.model.BlogPost",
            autoLoad: false,
            pageSize        : 1000,
            autoLoad        : true,
            listeners: {
                load: function(store, records) {
                    //console.log(records);
                }
            }
        }
    }
});