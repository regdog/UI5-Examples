

sap.ui.controller("Views.master.Years", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf Views.master.Years
*/
	onInit: function() {
  
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf Views.master.Years
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf Views.master.Years
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf Views.master.Years
*/
//	onExit: function() {
//
//	}
// This method gets triggered whenever a item in the List is pressed. Here we trigger
// navTo() method of Router to initiate the navigation	
itempressed: function(oEvent) {  
	  // Get instance of router
	  this.oRouter = sap.ui.core.routing.Router.getRouter("router");  
// Get Array if all items in List control	  
	  var a = oEvent.getSource().getAggregation("items");
// Get reference to current Listitem that has been clicked	  
	  var b = oEvent.getParameters().listItem; 
// In order to know the position of the clicked Listitem with in the List
// we loop over all items and compare each Listitem with the clicked Listitem	  
	  for (var i = 0; i < a.length; i++) {
			if (a[i] == b) {
				break;  // we have a match so exit the loop. At this point 'i' refers to index of clicked Listitem
			}
	  }
// Call navTo() method of Router class to trigger the navigation
// For route "rcategories' pattern is defined as 'oscars/{year} where 'year' is a variable
// which needs to be repalced by a value. Here we are replacinf it with the index of Listitem
// that has been clicked by user	  
	  this.oRouter.navTo("rcategories", { year : i });  
	  }  

});