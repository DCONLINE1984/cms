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
        bodyPadding: '15 10 15 10'
    },
    items: [
        {
            title: 'Arkadie',
            floatable: false,
            id: 'leftNav',
            collapsed: false,
            margin: '0 0 0 0',
            width: 200,
            region: 'west',
            height: 800,
            style: 'border-right:1px solid #ae4b33;',
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
                handler: 'addnew',
                margin: '0 0 3 0'
            }, {
                xtype: 'button',
                text: 'Theming',
                iconCls: 'x-fa fa-css3',
                width: '100%',
                handler: 'themeing'
            }, {
                xtype: 'image',
                docked: 'bottom',
                src: "/uploads/alanasidebar.jpg",
                width: "100%",
                margin: '15 0 0 0'
            }]
        }, {
            collapsible: false,
            region: 'center',
            ui: 'mainContent',
            overflowY: 'auto',
            id: 'blogPostContainer',
            layout:{
                type: 'vbox',
                align: 'center'
            }
        }
    ]
});