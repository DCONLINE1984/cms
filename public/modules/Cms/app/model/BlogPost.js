Ext.define('Cms.model.BlogPost', {
    extend      : 'Ext.data.Model',
    fields      : [
        {name:'tags'},
        {name:'html'},
        {name:'id'}
    ],
    pageSize    : 25,
    remoteSort  : false,
    autoLoad    : false,
    proxy       : {
        type: 'ajax',
        timeout: 6000,
        api: {
            read: '/blogpost/getblogpost'
        },
        reader : {
            type : 'json'
        },
        extraParams: {
            id: 5
        }
    }
});