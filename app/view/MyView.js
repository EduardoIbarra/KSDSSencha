Ext.define('KSDSSENCHA.view.MyView', {
	extend: 'Ext.Panel',
	xtype: 'myview',
	config: {
		title: 'Mi Vista',
		iconCls: 'star'
	},
	
	constructor: function(){
		var me = this;
		me.callParent(arguments);
		
		var myToolbar = Ext.create('Ext.Toolbar', {
			title: 'Mi toolbar',
			docked: 'top'
		});
		
		var myButton = Ext.create('Ext.Button', {
			text: 'Presioname',
			id: 'miBoton'
		});
		
		myToolbar.add([myButton]);
		me.add([myToolbar]);
	}
});