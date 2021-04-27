sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("ZAP_VIM_Report.controller.V_Output", {

		onInit: function() {
			// Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			// Validate/Match the Router Details sent from Input Controller
			oRouter.getRoute("Route_Output").attachMatched(this._onRouteFound, this);
		},
		
		// Custom Method to bind the elements using the Event Arguments
		_onRouteFound: function(oEvt) {
			// debugger;
			var oArgument = oEvt.getParameter("arguments");
			
			// var oView = this.getView();
			
			var lv_xblnr = oArgument.ip_xblnr;
			
			// var oView = this.getView();
			
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZGW_VIM_APP2_SRV/");
			
			this.getView().setModel(oModel);
			               
			var filters = new sap.ui.model.Filter({
				and: true,
				filters: [new sap.ui.model.Filter("Xblnr", sap.ui.model.FilterOperator.EQ, lv_xblnr)]
			});
			var binding = this.byId("list").getBinding("items");
			binding.filter(filters);
		},

		// Go Back to Input View
		NavToInputView: function(oEvt) {
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Route_Input", {});
		},

		// Go Forward to Detail View
		NavToDetailView: function(oEvt) {
			// alert("hello you clicked the right button");
			// debugger;

			var selBelnr = oEvt.getSource().getBindingContext().getProperty("Belnr");
			var selBukrs = oEvt.getSource().getBindingContext().getProperty("Bukrs");
			var selGjahr = oEvt.getSource().getBindingContext().getProperty("Gjahr");

			var oRouter1 = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter1.navTo("Route_Detail", {
				p_belnr: selBelnr,
				p_bukrs: selBukrs,
				p_gjahr: selGjahr
			});

		}
	});
});