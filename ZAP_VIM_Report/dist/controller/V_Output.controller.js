sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("ZAP_VIM_Report.controller.V_Output", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZAP_VIM_Report.view.V_Output
		 */
		onInit: function() {
			// Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// Validate/Match the Router Details sent from source using oRouter.navTo("Router_Detail", {SelectedItem: selectPO});
			oRouter.getRoute("Route_Output").attachMatched(this._onRouteFound, this);
			// oRouter.getRoute("Target_Detail").attachMatched(this._onRouteFound, this);
		},
		// Custom Method to bind the elements using the Event Arguments
		_onRouteFound: function(oEvt) {
			// debugger;
			var oArgument = oEvt.getParameter("arguments");
			var oView = this.getView();
			var lv_xblnr = oArgument.ip_xblnr;
			//		alert(lv_xblnr);
			var oView = this.getView();
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZGW_VIM_APP2_SRV/");
			this.getView().setModel(oModel);
			//	var lvv_xblnr = oView.byId("IP_XBLNR").getValue();                 
			var filters = new sap.ui.model.Filter({
				and: true,
				filters: [new sap.ui.model.Filter("Xblnr", sap.ui.model.FilterOperator.EQ, lv_xblnr)]
			});
			var binding = this.byId("list").getBinding("items");
			binding.filter(filters);
		},

		NavToInputView: function(oEvt) {
			// debugger;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Route_Input", {});
		},

		NavToDetailView: function(oEvt) {
			// alert("hello you clicked the right button");
			// debugger;

			var selBelnr = oEvt.getSource().getBindingContext().getProperty("Belnr");
			var selBukrs = oEvt.getSource().getBindingContext().getProperty("Bukrs");
			var selGjahr = oEvt.getSource().getBindingContext().getProperty("Gjahr");
			//	var p_keys  = "(Belnr='" + selBelnr + "',Bukrs='" + selBukrs + "',Gjahr='" + selGjahr + "')";
			//	var lvv_xblnr = "(Belnr='5100000000',Bukrs='0100',Gjahr='2003')";
			//	var lvv_xblnr = selBelnr + selBukrs + selGjahr;
			var oRouter1 = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter1.navTo("Route_Detail", {
				// p_key : p_keys
				p_belnr: selBelnr,
				p_bukrs: selBukrs,
				p_gjahr: selGjahr
			});

		}
	});
});