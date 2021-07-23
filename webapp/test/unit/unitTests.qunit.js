/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demoApp5/project5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
