sap.ui.jsview("view.App", {

	getControllerName : function() {
		return "";
	},
	createContent : function(oController) {
		var oButton = new sap.m.Button("btn1", {text:sap.ui.getCore().AppContext.Language});
		return oButton;
	}
});