/**
 * The page view
 * @author Dean Clow
 */

//the iframe!!!!!
var iframe = '<iframe onload="iframeLoaded()" id="iframe" style="position:absolute; height:100%; border: none; width:100%;" scrolling="no" src="{{src}}"></iframe>';

/**
 * When the iframe is loaded, set the height of the container
 * @returns void
 */
function iframeLoaded(){
    var height = ($('iframe').contents().height()) + 20;
    Ext.getCmp("pageViewContent").setHeight(height);
}

Ext.define('Cms.view.page.PageView', {
    extend: 'Ext.panel.Panel',
    xtype: 'page',
    requires: ["Cms.view.page.PageController"],
    pageContent : "",
    cls: 'blogPost',
    controller: 'page',
    width: '85%',
    border: 1,
    margin: '0 0 0 0',
    initComponent: function() {
        var me = this;
        this.items = [{
            xtype: 'panel',
            cls: 'blogPost',
            id: 'pageViewContent',
            padding: '0 15 0 10',
            margin: '10 10 10 10',
            width: '100%',
            style: 'border-left:1em solid transparent;border-right:1em solid transparent;word-wrap:break-word !important;',
            html: me.pageContent
        }];
        this.callParent();
    }
});