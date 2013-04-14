Ext.define('KSDSSENCHA.view.Users', {
	extend: 'Ext.navigation.View',
	xtype: 'users',
	layout: 'fit',
	requires:[
		'Ext.dataview.List'
	],
	config:{
		title: 'Users',
		iconCls: 'user',
		navigationBar: false
	},
	
	constructor: function(){
		var me = this;
		me.callParent(arguments);
		
		var userList = Ext.create('Ext.List', {
		    fullscreen: true,
		    itemTpl: '{title}',
		    data: [
		        { title: 'Item 1' },
		        { title: 'Item 2' },
		        { title: 'Item 3' },
		        { title: 'Item 4' }
		    ]
		});
		
		me.add([userList]);
	}
});