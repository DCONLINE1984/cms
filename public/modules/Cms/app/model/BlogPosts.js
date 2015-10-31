Ext.define('Cms.model.BlogPosts', {
    extend      : 'Ext.data.Model',
    fields      : [
        {name:'tags'},
        {name:'html'}
    ],
    pageSize    : 25,
    remoteSort  : false,
    autoLoad    : true,
    proxy       : {
        type: 'ajax',
        timeout: 6000,
        api: {
            read: '/blogpost/getblogposts'
        },
        reader : {
            type : 'json'
        }
    }
});