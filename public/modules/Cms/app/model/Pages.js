Ext.define('Cms.model.Pages', {
    extend      : 'Ext.data.Model',
    fields      : [
        {name:'content'},
        {name:'title'}
    ],
    pageSize    : 25,
    remoteSort  : false,
    autoLoad    : true,
    proxy       : {
        type: 'ajax',
        timeout: 6000,
        api: {
            read: '/pagebuilder/getpages'
        },
        reader : {
            type : 'json'
        }
    }
});