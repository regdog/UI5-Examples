sap.ui.controller("Views.detail.NomWinner", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf Views.detail.NomWinner
*/
	onInit: function() {
// Get instance of Router
		  this.oRouter = sap.ui.core.routing.Router.getRouter("router");  
// Call 'attachRouteMatched method,which defines a function that gets called everytime 
// a 'RouteMatched' event is triggered by application			  
		  this.oRouter.attachRouteMatched(function(oEvent) { 
// Get the name of the Route	
			  var sRoute = oEvent.getParameter("name"),  
// Get the name of the target view	
			  oView = oEvent.getParameter("view");  
// As this method gets called for all routes defined in the application we  have to
//make sure that code gets executed only for the route that we are interested in			  
			  if(sRoute == "rnomwinner")
				 {
// Define the binding path			  
				  var spath = "/oscars/" + oEvent.getParameter('arguments').year + "/categories/" + oEvent.getParameter('arguments').cat + "/nominees";
// Set the button text back to original value every time user clicks on new category 
				  oView.byId("idbutton").setText("And the Winner is....");
// Bind aggragation 'Items' of List with above defined path pass listitem with id 'idlistitem' as template	
				  oView.byId("idlist").bindItems(spath, oView.byId("idlistitem"));
				 }
		  });
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf Views.detail.NomWinner
*/
	/*onBeforeRendering: function() {
	
	
	},*/

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf Views.detail.NomWinner
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf Views.detail.NomWinner
*/
//	onExit: function() {
//
//	}

	click: function(oEvent){
//Get the instance of HashChanger		
		  this.oHasher = sap.ui.core.routing.HashChanger.getInstance();
//Split the hash value at '/'. this will give you an array with individual values		  
		  var j = this.oHasher.getHash().split("/");
//Get the value of element 'winner' in JSON model at a given path		  
		  var winner = sap.ui.getCore().getModel().getProperty("/oscars/"+j[1]+"/categories/"+j[2]+ "/winner");
//Set the value of property 'text' of button with value of 'winner'		  
		  this.getView().byId("idbutton").setText(winner);
	},
// Navigate previous entry in browser history	
	onNavButtonTap : function()
	{
		window.history.go(-1);
	}
});