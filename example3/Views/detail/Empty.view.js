sap.ui.jsview("Views.detail.Empty", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf Views.detail.Empty
	*/ 
	getControllerName : function() {
		return "Views.detail.Empty";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf Views.detail.Empty
	*/ 
	createContent : function(oController) {
 		var detailpage = new sap.m.Page({
			title: "Details",
			content: [
			
			]
 		
 		
		});
 		
 		return detailpage;
	}

});