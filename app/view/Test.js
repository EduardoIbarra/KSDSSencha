Ext.define('KSDSSENCHA.view.Test', {
	extend: 'Ext.Container',
	xtype: 'test',
	config: {
		title: 'Inicio',
		iconCls: 'home',
	},
	constructor: function(){
		var me = this;
		me.callParent(arguments);
		
		var myToolBar = Ext.create('Ext.Toolbar', {
			title: 'My Toolbar',
			docked: 'top'
		});
		
		var myButton = Ext.create('Ext.Button', {
			text: 'My Button'
		});
		myToolBar.add([myButton]);
		
		me.add([myToolBar]);
	}
});