sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
    "demoApp5/project5/model/models",
    "sap/ui/model/json/JSONModel",
    "sap/base/util/UriParameters",
    "sap/f/library"
], function (UIComponent, Device, models, JSONModel, UriParameters, library) {
    "use strict";
    
     var LayoutType = library.LayoutType;

	return UIComponent.extend("demoApp5.project5.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            
            
            // set products demo model on this sample
            var oTableListModel = new JSONModel(jQuery.sap.getModulePath("demoApp5.project5", "./json/table_list.json"));
            oTableListModel.setDefaultBindingMode("OneWay");
            this.setModel(oTableListModel, "table_list");

            
            var oDocPackModel = new JSONModel(jQuery.sap.getModulePath("demoApp5.project5", "./json/doc_pack.json"));
            oDocPackModel.setDefaultBindingMode("OneWay");
            this.setModel(oDocPackModel, "doc_pack");

             var oDocListModel = new JSONModel(jQuery.sap.getModulePath("demoApp5.project5", "./json/doc_list.json"));
            oDocListModel.setDefaultBindingMode("OneWay");
            this.setModel(oDocListModel, "doc_list");

            var oDocExtractModel = new JSONModel(jQuery.sap.getModulePath("demoApp5.project5", "./json/doc_extract.json"));
            oDocExtractModel.setDefaultBindingMode("OneWay");
            this.setModel(oDocExtractModel, "doc_extract");

            var oDocNoteModel = new JSONModel(jQuery.sap.getModulePath("demoApp5.project5", "./json/doc_notes.json"));
            oDocNoteModel.setDefaultBindingMode("OneWay");
            this.setModel(oDocNoteModel, "doc_notes");

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
