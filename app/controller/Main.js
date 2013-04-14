Ext.define('KSDSSENCHA.controller.Main', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs:{
			miBoton: '#miBoton'
		},
		control:{
			miBoton:{
				tap: 'mostrarAlerta'
			}
		}
	},
	
	mostrarAlerta: function(){
		alert('Estoy ejecutandome desde un controller');
	}
});