/**
 * The page view
 * @author Dean Clow
 */

var iframe = '<iframe style="height: 100%; border: 0; width:100%;" src="{{src}}"></iframe>';

Ext.define('Cms.view.page.PageView', {
    extend: 'Ext.panel.Panel',
    xtype: 'page',
    requires: ["Cms.view.page.PageController"],
    pageContent : "",
    cls: 'blogPost',
    controller: 'page',
    width: '74%',
    border: 1,
    margin: '0 0 0 0',
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
            padding: '0 15 0 10',
            margin: '10 10 10 10',
            html: me.pageContent
        }];
        this.callParent();
    }
});