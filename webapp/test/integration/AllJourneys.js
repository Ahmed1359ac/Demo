/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 MatDescSet in the list
// * All 3 MatDescSet have at least one Material

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
		"com/zaz/com/Materiallist/test/integration/MasterJourney",
		"com/zaz/com/Materiallist/test/integration/NavigationJourney",
		"com/zaz/com/Materiallist/test/integration/NotFoundJourney",
		"com/zaz/com/Materiallist/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});