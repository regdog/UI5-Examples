sap.ui.jsview("Views.master.Years", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf Views.master.Years
	*/ 
	getControllerName : function() {
		return "Views.master.Years";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf Views.master.Years
	*/ 
	createContent : function(oController) {
// Create a standardlistitem control by binding 'title' property with element 'year' of the JSON model		
		var oItemTemplate = new sap.m.StandardListItem({title : "{year}", type : sap.m.ListType.Active});
// Create 'List' control having 'oscars' node of model as binding to 'items' aggregation and add a
// eventhadnler method ( 'itempressed' method in controller) to 'itemPress event. This event gets triggered
//	whenever user press a Listeitem		
		var oList = new sap.m.List({ 
			items : {path:"/oscars", template:oItemTemplate},
		    itemPress : function(oEvent){
			oController.itempressed(oEvent);
		}
		});
// Add List control to a new Page control and return it		
		var oPage = new sap.m.Page({
			title: "Years",
			content: [oList]
		});
		return oPage;
	}
});