//jQuery.sap.require("sap.ui.commons.ButtonStyle");
sap.ui.jsview("Views.detail.NomWinner", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf Views.detail.NomWinner
	*/ 
	getControllerName : function() {
		return "Views.detail.NomWinner";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf Views.detail.NomWinner
	*/ 
	createContent : function(oController) {
// Create a standardlistitem control with id 'idlistitem' and  by binding 'nominee' property with element 
// 'category' of the JSON model	
var oItemTemplate = new sap.m.StandardListItem(this.createId("idlistitem"), {title : "{nominee}", type : sap.m.ListType.Active});
//Create 'List' control with id 'idlist'
		var oList = new sap.m.List( this.createId("idlist"));
//Create a Button control with id 'idbutton' and add an eventhandler method 'click' of controller
// to action 'press'		
		var oButton = new sap.ui.commons.Button(this.createId("idbutton"),{
			width : "300px",
			height : "100px",
			style: sap.ui.commons.ButtonStyle.Accept,
			press : function(oEvent) {
				oController.click(oEvent);
				}
		});
//Add List control and Button control to a new Page control and return it			
		this.page = new sap.m.Page({
			title: "Nominees and Winner",
			navButtonText: "Back",
			showNavButton: true,
			navButtonPress: [oController.onNavButtonTap, oController],
			content: [oList, oButton]
		});
		
		return this.page;
	}

});