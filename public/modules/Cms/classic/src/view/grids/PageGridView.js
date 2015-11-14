Ext.define('Cms.view.grids.PageGridView', {
    alias       : 'widget.pageGrid',
    extend      : 'Ext.grid.Panel',
    requires    : ["Cms.view.grids.PageGridController"],
    columnLines : true,
    controller  : 'pagegrid',
    viewModel   : 'mainmodel',
    layout      : 'fit',
    title       : '',
    border      : 1,
    loadMask    : true,
    width       : "100%",
    height      : 'auto',
    selType     : 'cellmodel',
    store       : {},
    columns: [{ 
        text            : 'Title',
        dataIndex       : 'title',
        flex            : 1
    }, { 
        text            : 'On Sidebar',
        dataIndex       : 'onMenu',
        width           : 100
    }, {
        text            : 'Target',
        dataIndex       : 'link',
        flex            : 1
    }, {
        xtype: 'widgetcolumn',
        text: 'Edit',
        widget: {
            xtype: 'button',
            text: 'Edit',
            handler: 'editPage',
            listeners : {
                render: function (button) {
                    button.pageId = button.getWidgetRecord().get('id');
                }
            },
            margin: '5 0 5 0'
        }
    }, {
        xtype: 'widgetcolumn',
        text: 'Delete',
        widget: {
            xtype: 'button',
            text: 'Delete',
            handler: 'deletePage',
            listeners : {
                render: function (button) {
                    button.pageId = button.getWidgetRecord().get('id');
                }
            },
            margin: '5 0 5 0'
        }
    }]
});