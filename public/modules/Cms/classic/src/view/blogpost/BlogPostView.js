/**
 * The blog post view
 * @author Dean Clow
 */

Ext.define('Cms.view.blogpost.BlogPostView', {
    extend: 'Ext.panel.Panel',
    xtype: 'blogpost',
    requires: ["Cms.view.blogpost.BlogPostController"],
    blogContent : "",
    controller: 'blogpost',
    width: '75%',
    border: 1,
    margin: '0 0 15 0',
    initComponent: function() {
        var me = this;
        this.items = [{
            xtype: 'toolbar',
            dock: 'top',
            itemId: 'toptoolbar',
            margin: '5 5 5 5',
            border: 0,
            hidden: true,
            items: [{
                xtype: 'tbfill'
            }, {
                xtype: 'button',
                text: 'Edit',
                iconCls: 'x-fa fa-pencil-square-o',
                margin: '0 5 0 0',
                handler: 'edit'
            }, {
                xtype: 'button',
                text: 'Delete',
                iconCls: 'x-fa fa-trash',
                handler: 'delete'
            }]
        }, {
            xtype: 'panel',
            cls: 'blogPost',
            padding: '0 15 0 15',
            margin: '10 10 10 10',
            html: me.blogContent
        }];
        this.callParent();
    }
});