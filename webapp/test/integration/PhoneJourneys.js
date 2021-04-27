/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/zaz/com/Materiallist/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/zaz/com/Materiallist/test/integration/pages/App",
	"com/zaz/com/Materiallist/test/integration/pages/Browser",
	"com/zaz/com/Materiallist/test/integration/pages/Master",
	"com/zaz/com/Materiallist/test/integration/pages/Detail",
	"com/zaz/com/Materiallist/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.zaz.com.Materiallist.view."
	});

	sap.ui.require([
		"com/zaz/com/Materiallist/test/integration/NavigationJourneyPhone",
		"com/zaz/com/Materiallist/test/integration/NotFoundJourneyPhone",
		"com/zaz/com/Materiallist/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});