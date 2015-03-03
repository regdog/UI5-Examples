
sap.ui.jsview("Views.MainView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myroutingdemo.MainView
	*/ 
	getControllerName : function() {
		return "Views.MainView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myroutingdemo.MainView
	*/ 
	createContent : function(oController) {
		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		// create app
		this.app = new sap.m.SplitApp("splitapp");
		//alert("in mainview , createcontent method");
		// create the first page in both master and detail areas 
		this.app.addDetailPage(sap.ui.jsview("Views.detail.Empty"));
		this.app.addMasterPage(sap.ui.jsview("Views.master.Years"));
		
		// navigate to the first page in both master and detail areas.
		// the toMaster must be called after calling the toDetail, because both of them point to the same reference in phone and 
		// the real first page that will be shown in phone is the page in master area. 
		this.app.toDetail("Views.detail.Empty");
		this.app.toMaster("Views.detail.Years");
		
		// done
		return this.app;
	}

});