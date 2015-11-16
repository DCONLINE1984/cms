/**
 * The add post form
 * @author Dean Clow
 */

Ext.define('Cms.view.forms.AddPage',{
    xtype: 'addpage',
    extend: 'Ext.form.Panel',
    requires: ["Cms.view.forms.AddPageModel",
               "Cms.view.forms.AddPageController"],
    viewModel: 'addpage',
    controller: 'addpage',
    pageId: 0,
    mode: 'add',
    width: '97%',
    layout: 'form',
    items: [{
        xtype           : 'fieldcontainer',
        labelWidth      : 100,
        width           : '97%',
        layout          : 'anchor',
        defaults: {
            anchor      : '100%',
            labelAlign  : 'left'
        },
        fieldDefaults: {
            labelAlign  : 'top'
        },
        items: [{
            xtype: 'textfield',
            width: '100%',
            fieldLabel: 'Title:',
            id: 'addPage_title',
            labelWidth: 100
        }, {
           xtype: 'checkboxfield',
           id: 'addPage_showOnMenu',
           fieldLabel: 'Show on menu',
           labelWidth: 100
        }, {
            xtype: 'htmleditor',
            id: 'addPageBody',
            width: '100%',
            height: 300,
            bind: '{html}',
            padding: 0,
            listeners: {
                render: function(editor) {
                    editor.getToolbar().add({
                        xtype: 'button',
                        iconCls: 'x-fa fa-file-image-o',
                        handler: function() {
                            new Ext.Window({
                                padding: 10,
                                title: 'Select image',
                                closable: true,
                                modal: true,
                                id: 'wndImageUpload',
                                height: 200,
                                width: 500,
                                items: [{
                                    xtype: 'form',
                                    id: 'frmFileUpload',
                                    fileUpload: true,
                                    items: [{
                                        xtype: 'fileuploadfield',
                                        fieldLabel: 'Select Image',
                                        name: 'Upload',
                                        itemId: 'imgFileUploadField',
                                        labelWidth: '90',
                                        margin: '20 0 0 0'
                                    }, {
                                        xtype: 'button',
                                        text: 'Upload',
                                        scope: this,
                                        margin: '15 0 0 200',
                                        handler: function(config) {
                                            var form = Ext.getCmp("frmFileUpload").getForm();
                                            form.submit({
                                                url: '/imageuploader/uploadimage',
                                                success: function (fp, result) {
                                                    var result = Ext.util.JSON.decode(result.response.responseText);
                                                    var imagePath = ('/uploads/' + result.filename);
                                                    var html = Ext.getCmp("addPageBody").getValue();
                                                    html += '<img src="' + imagePath + '" alt="" title="" />';
                                                    Ext.getCmp("addPageBody").setValue(html); //set the new value
                                                    Ext.getCmp("wndImageUpload").destroy(); //set the image upload
                                                    Ext.getCmp("frmFileUpload").destroy();
                                                },
                                                failure: function (fp, result) {
                                                    console.log(result);
                                               }
                                            });
                                        }
                                    }]
                                }]
                            }).show();
                        }
                    });
                }
            }
        }, {
            xtype: 'button',
            text: 'Submit',
            align: 'center',
            style: 'float: right;',
            width: '100%',
            handler: 'submit'
        }]
    }]
});