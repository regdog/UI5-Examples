//var spath;

sap.ui.jsview("Views.detail.Categories", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf Views.master.Categories
	*/ 

	getControllerName : function() {
		return "Views.detail.Categories";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf Views.master.Categories
	*/ 
	createContent : function(oController) {
// Create a standardlistitem control with id 'idlistitem' and  by binding 'title' property with element 
// 'category' of the JSON model	
var oItemTemplate = new sap.m.StandardListItem(this.createId("idlistitem") , {title : "{category}", type : sap.m.ListType.Active});
//Create 'List' control with id 'idlist' and add a
//eventhadnler method ( 'itempressed' method in controller) to 'itemPress event. This event gets triggered
//	whenever user press a Listeitem	
var oList = new sap.m.List(this.createId("idlist"), { 
		itemPress : function(oEvent){
			oController.itempressed(oEvent);
		}
		});
//Add List control to a new Page control and return it			
var oPage = new sap.m.Page({
	title: "Categories",
	content: [oList]
});
return oPage;
	}
});