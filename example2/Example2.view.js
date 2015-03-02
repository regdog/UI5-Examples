sap.ui.jsview("sap.ui.core.samples.routing.Example2", {
	
	getControllerName: function() {
		return "sap.ui.core.samples.routing.Example2";
	},

	/**
	 * 
	 * @param oController may be null
	 * @returns {sap.ui.cre.Control}
	 */
	createContent: function(oController) {
		return new sap.ui.commons.Button({text:'Example2'});
	}

});