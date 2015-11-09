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
            }else{
                t.show(); //show all toolbars
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
    }
});