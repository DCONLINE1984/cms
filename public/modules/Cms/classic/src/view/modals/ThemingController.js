/**
 * The theming controller
 * @author Dean Clow
 */

Ext.define("Cms.view.modals.ThemingController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.theming',
    
    /**
     * Update custom css
     * @returns void
     */
    update: function() {
        var url = '/theming/update';
        var parameters = {
            css     : Ext.getCmp("customCss").getValue()
        };
        console.log(parameters);
        Ext.Ajax.request({
            url: url,
            params: parameters,
            method: 'POST',
            success: function(response) {
                var message = Ext.Msg.alert('Success', 'CSS updated successfully.<br /><br />The page will now reset.', Ext.emptyFn);
                setTimeout(function() {
                    try{
                        message.hide();
                        //refresh the page
                        window.location.reload();
                    }catch(e){}
                }, 2000);
            },
            failure: function(response) {
                Ext.Msg.alert('An error occurred', 
                              'Failed to save',
                              Ext.emptyFn);
            }
        });
    },
    
    /**
     * Reset to default
     * @returns void
     */
    resetToDefault: function() {
        var url = '/theming/resettodefault';
        Ext.Ajax.request({
            url: url,
            method: 'POST',
            success: function(response) {
                var message = Ext.Msg.alert('Success', 'CSS reset to default.<br /><br />The page will now reset.', Ext.emptyFn);
                setTimeout(function() {
                    try{
                        message.hide();
                        //refresh the page
                        window.location.reload();
                    }catch(e){}
                }, 2000);
            },
            failure: function(response) {
                Ext.Msg.alert('An error occurred', 
                              'Failed to reset',
                              Ext.emptyFn);
            }
        });
    }
});