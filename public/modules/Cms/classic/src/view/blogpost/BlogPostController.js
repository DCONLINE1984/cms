Ext.define("Cms.view.blogpost.BlogPostController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.blogpost',
    
    edit: function() {
        new Ext.Window({
            padding: 10,
            closable: true,
            title: 'Edit blog entry',
            height: 550,
            modal: true,
            width: '90%',
            items: [{
                xtype: 'addpost'
            }]
        }).show();
    },
    
    delete: function() {
        
    }
});