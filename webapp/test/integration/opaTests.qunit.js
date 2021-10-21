/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ypf/fiorineo/fiorineo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});