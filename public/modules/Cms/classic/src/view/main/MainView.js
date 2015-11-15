/**
 * The main view
 * @author Dean Clow
 */

Ext.define('Cms.view.main.MainView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Border',
        'Cms.view.blogpost.BlogPostView',
        'Cms.view.page.PageView',
        'Cms.view.modals.PageManagementView',
        'Cms.view.forms.AddPost',
        'Cms.view.main.MainController',
        'Cms.view.main.MainModel',
        'Cms.model.Pages'
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
            bodyPadding: '0 10 15 10',
            region: 'west',
            height: 800,
            style: 'border-right:1px solid #ae4b33;',
            items: [{
                xtype: 'checkboxfield',
                bodyPadding: '0 10 0 10',
                fieldLabel: 'Administrator Mode',
                labelWidth: 160,
                width: '100%',
                listeners: {
                    change: 'toggleAdminMode'
                }
            }, {
                xtype: 'button',
                text: 'Add Post',
                id: 'addPostButton',
                iconCls: 'x-fa fa-plus',
                width: '100%',
                handler: 'addnew',
                hidden: true,
                textAlign: 'left',
                margin: '0 0 3 0'
            }, {
                xtype: 'button',
                text: 'Page Management',
                iconCls: 'x-fa fa-folder',
                id: 'pageManagementButton',
                width: '100%',
                hidden: true,
                handler: 'pageManagement',
                textAlign: 'left',
                margin: '0 0 3 0'
            }, {
                xtype: 'button',
                text: 'Theming',
                iconCls: 'x-fa fa-css3',
                id: 'themingButton',
                hidden: true,
                width: '100%',
                handler: 'themeing',
                textAlign: 'left'
            }, {
                xtype: 'image',
                docked: 'bottom',
                src: "/uploads/alanasidebar.jpg",
                width: "100%",
                margin: '15 0 15 0'
            }, {
                xtype: 'button',
                text: 'Home',
                iconCls: 'x-fa fa-home',
                margin: '0 0 3 0',
                width: '100%',
                handler: 'home',
                textAlign: 'left'
            }, {
                xtype: 'panel',
                id: 'leftNavStaticPages'
            }] //the static page buttons are loaded on load
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