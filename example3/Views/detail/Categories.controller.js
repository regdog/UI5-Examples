sap.ui.controller("Views.detail.Categories", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf Views.master.Categories
*/
	onInit: function() {
// Get instance of Router		
			this.oRouter = sap.ui.core.routing.Router.getRouter("router");  
// Call 'attachRouteMatched method,which defines a function that gets called everytime 
// a 'RouteMatched' event is triggered by application			
			this.oRouter.attachRouteMatched(function(oEvent) { 
// get the name of the Route				
			  var sRoute = oEvent.getParameter("name"),
// Get the name of the target view			  
			      oView = oEvent.getParameter("view"); 
// As this method gets called for all routes defined in the application we  have to
//make sure that code gets executed only for the route that we are interested in			  
			  if(sRoute == "rcategories")
				 {
// Define the binding path				  
				  var spath = "/oscars/" + oEvent.getParameter('arguments').year + "/categories";
// Bind aggragation 'Items' of List with above defined path pass listitem with id 'idlistitem' as template				  
				  oView.byId("idlist").bindItems(spath, oView.byId("idlistitem"));
				 }
		  });
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf Views.master.Categories
*/
	//onBeforeRendering: function() {


//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf Views.master.Categories
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf Views.master.Categories
*/
//	onExit: function() {
//
//	}

	itempressed: function(oEvent) {  
		     //Get the instance of Router
			  this.oRouter = sap.ui.core.routing.Router.getRouter("router"); 
			 //Get the instance of HashChanger 
			  this.oHasher = sap.ui.core.routing.HashChanger.getInstance();
			  //Get the current hash value in the URL and split the URL at character '/'
			  // if the hash value is 'oscars/2', then below statemnet will split that into
			  //'oscars' and '2'. we are interested in element with index 1 i.e. second element in array 'j'
			  var j = this.oHasher.getHash().split("/")[1];
			  // Get all instances of Listitems present in List
			  var a = oEvent.getSource().getAggregation("items"); 
			  //Get instance of Listitem which user has clicked
			  var b = oEvent.getParameters().listItem; 
			  //To get the index of the Listitem that has been clicked loop over the array of Listitems
			  // and compare with clicked listitem that is 'b'
			  for (var i = 0; i < a.length; i++) {
					if (a[i] == b) {
						break;  //we have a match so exit the loop
					}
			  }
		//navigate to Route 'rnomwinner'. pass values to variables 'year' and 'cat' in patter 'nominees/{year}/{cat}'	  
		  this.oRouter.navTo("rnomwinner",  { year : j , cat : i});  
		  }
});