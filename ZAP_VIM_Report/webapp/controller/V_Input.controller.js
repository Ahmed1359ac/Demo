sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZAP_VIM_Report.controller.V_Input", {

		onInit: function() {},
		GetInvoice: function(evt) {

			var oView = this.getView();

			var lvv_xblnr = oView.byId("IP_XBLNR").getValue();

			// Now Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Tell the Router to Navigate To Route_Output which is linked to V_Output view
			oRouter.navTo("Route_Output", {
				ip_xblnr: lvv_xblnr
			});

		}

	});

});