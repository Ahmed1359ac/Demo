sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"], function(Controller,History) {
	"use strict";

	return Controller.extend("ZAP_VIM_Report.controller.V_Detail", {
		onInit: function() {
			// Get the Router Info
			// alert("you reached to init method");
			// debugger;

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Route_Detail").attachMatched(this._onRouteFound, this);
		},
		_onRouteFound: function(oEvt) {
			// debugger;
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

			// var oArgument = oEvt.getParameter("arguments");
			// var oView = this.getView();
			// oView.bindElement({
			// 	//	path: "/DocDetailSet" + oArgument.p_key
			// 	path: "/DocDetailSet(Belnr='5100000000',Bukrs='0100',Gjahr='2003')",
			// });

		},

		GoToOutput: function(evt) {

		//	debugger;
			// var oView = this.getView();

			// var lvv_xblnr = oView.byId("Xblnr").getValue();
			
			// // Now Get the Router Info
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// // Tell the Router to Navigate To Route_PODetail which is linked to V_PODetail view
			// oRouter.navTo("Route_Output", {
			// 	ip_xblnr: lvv_xblnr
			// });
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("object", true);
			}			

		}

	});

});