/**
 * The main controller
 * @author Dean Clow
 */

Ext.define("Cms.view.main.MainController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maincontroller',
    
    /**
     * Toggle admin mode on/off
     */
    adminMode: 'off',
    
    /**
     * Add a new blog entry
     * @returns {undefined}
     */
    addnew: function() {
        new Ext.Window({
            padding: 10,
            closable: true,
            title: 'New blog entry',
            id: 'blogModal',
            height: 550,
            modal: true,
            width: '90%',
            items: [{
                xtype: 'addpost'
            }]
        }).show();
    },
    
    /**
     * Toggle admin mode on/off
     * @returns void
     */
    toggleAdminMode: function() {
        var me = this;
        var toolbar = Ext.ComponentQuery.query("#toptoolbar");
        //show all toolbars
        for(var i=0;i<toolbar.length;i++){
            var t = toolbar[i];
            if(me.adminMode=='on'){
                t.hide();
                Ext.getCmp("addPostButton").hide();
                Ext.getCmp("themingButton").hide();
                Ext.getCmp("pageManagementButton").hide();
            }else{
                t.show(); //show all toolbars
                Ext.getCmp("addPostButton").show();
                Ext.getCmp("themingButton").show();
                Ext.getCmp("pageManagementButton").show();
            }
        }
        //set the mode
        if(me.adminMode=='on'){
                me.adminMode = 'off';
                return;
        }
        me.adminMode = 'on';
    },
    
    /**
     * Change the theme for the app
     * @returns void
     */
    themeing: function() {
        console.log('hi');
    },
    
    /**
     * Load the page management modal
     * @returns void
     */
    pageManagement: function() {
        new Ext.Window({
            padding: 10,
            closable: true,
            title: 'Page Management',
            id: 'pageManagementModal',
            autoScroll: true,
            y: 50, 
            anchor: "100% 100%", 
            modal: true,
            width: '90%',
            items: [{
                xtype: 'pagemanagement'
            }]
        }).show();
    },
    
    /**
     * Load a static page
     * @param Obj element
     * @returns void
     */
    loadPage: function(element) {
        var me = this;
        var vm = me.getViewModel();
        var record = vm.getStore("pages").findRecord("id", element.pageId);
        //load the page into the container
        var container = Ext.getCmp("blogPostContainer");
        container.removeAll();
        //we are using an iframe so we can access pages from inside the content itself
        var iframeSrc = iframe;
        iframeSrc = iframeSrc.replace("{{src}}", '/pagebuilder/getpagecontent?id='+record.data.id);
        container.add({
            xtype: 'page',
            pageContent: iframeSrc,
            pageId: record.data.id,
            height: 'auto'
        });
    },
    
    /**
     * Go back home! (loads the blog again)
     * @returns void
     */
    home: function() {
        var me = this;
        var vm = me.getViewModel();
        var store = vm.getStore("blogposts");
        store.reload();
    }
});