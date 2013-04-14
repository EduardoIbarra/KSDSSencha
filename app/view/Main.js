Ext.define("KSDSSENCHA.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
	            xtype: 'test'
            },
            {
	            xtype: 'myview'
            },
            {
	            xtype: 'users'
            }
        ]
    }
});
