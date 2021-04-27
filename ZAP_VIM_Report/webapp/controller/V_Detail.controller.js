sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"], function(Controller,History) {
	"use strict";

	return Controller.extend("ZAP_VIM_Report.controller.V_Detail", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Route_Detail").attachMatched(this._onRouteFound, this);
		},
		
		_onRouteFound: function(oEvt) {
			var oArgument = oEvt.getParameter("arguments");
			var lv_belnr = oArgument.p_belnr;
			var lv_bukrs = oArgument.p_bukrs;
			var lv_gjahr = oArgument.p_gjahr;

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZGW_VIM_APP2_SRV/");

			this.getView().setModel(oModel);

			var filters = new sap.ui.model.Filter({
				and: true,
				filters: [new sap.ui.model.Filter("Belnr", sap.ui.model.FilterOperator.EQ, lv_belnr),
					new sap.ui.model.Filter("Bukrs", sap.ui.model.FilterOperator.EQ, lv_bukrs),
					new sap.ui.model.Filter("Gjahr", sap.ui.model.FilterOperator.EQ, lv_gjahr)
				]
			});
			var binding = this.byId("list").getBinding("items");
			binding.filter(filters);
		},

		// Go Back to Output View
		GoToOutput: function(evt) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Route_Input", true);
			}			

		}

	});

});