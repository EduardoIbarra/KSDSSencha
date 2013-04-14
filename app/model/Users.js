Ext.define('KSDSSENCHA.model.Users', {
	extend: 'Ext.data.Model',
	config:{
		fields:[
			{name: 'name', type: 'string'},
			{name: 'email', type: 'string'},
			{name: 'company', type: 'string'}
		],
		proxy: {
			type: 'ajax',
			url: 'users.json',
			reader: {
				type: 'json'
			},
			success: function(result, request) {
				alert('ok');
			}
		}
	}	
});