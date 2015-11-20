Ext.define('Cms.model.CustomCss', {
    extend      : 'Ext.data.Model',
    fields      : [
        {name:'css'}
    ],
    pageSize    : 25,
    remoteSort  : false,
    autoLoad    : true,
    proxy       : {
        type: 'ajax',
        timeout: 6000,
        api: {
            read: '/theming/getcss'
        },
        reader : {
            type : 'json'
        }
    }
});