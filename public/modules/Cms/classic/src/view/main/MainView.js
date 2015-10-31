/**
 * The main view
 * @author Dean Clow
 */

Ext.define('Cms.view.main.MainView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Border',
        'Cms.view.blogpost.BlogPostView',
        'Cms.view.forms.AddPost',
        'Cms.view.main.MainController',
        'Cms.view.main.MainModel'
    ],
    layout: 'border',
    controller: 'maincontroller',
    viewModel: 'mainmodel',
    id: 'mainview',
    width: '100%',
    border: 0,
    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: '15 10 15 10'
    },
    items: [
        {
            title: 'Arkadie',
            floatable: false,
            collapsed: true,
            margin: '0 0 0 0',
            width: 200,
            region: 'west',
            items: [{
                xtype: 'checkboxfield',
                fieldLabel: 'Administrator Mode',
                labelWidth: 160,
                width: '100%',
                listeners: {
                    change: 'toggleAdminMode'
                }
            }, {
                xtype: 'button',
                text: 'Add Post',
                iconCls: 'x-fa fa-plus',
                width: '100%',
                handler: 'addnew'
            }]
        }, {
            collapsible: false,
            region: 'center',
            overflowY: 'auto',
            baseCls: 'centerContainer',
            id: 'blogPostContainer',
            layout:{
                type: 'vbox',
                align: 'center'
            }
        }
    ]
});