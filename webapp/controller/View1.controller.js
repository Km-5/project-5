sap.ui.define([
    "sap/ui/core/mvc/Controller",

],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("demoApp5.project5.controller.View1", {
            onInit: function () {
                this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this._oRouter.attachRouteMatched(this.handleRouteMatched, this);
            },


            handleRouteMatched: function (evt) {

                var oView = this.getView();
                oView.byId("idComboBox").setSelectedItem(null);

            },


            handleChange: function (oEvent) {
                    debugger;
                var selectedKey = this.byId("idComboBox").getSelectedItem().getKey();

                if (selectedKey === "oDocPack") {
                    this.oRouter = this.getOwnerComponent().getRouter();
                    this.oRouter.navTo("DocPack");

                } else if (selectedKey === "oDocList") {
                    this.oRouter = this.getOwnerComponent().getRouter();
                    this.oRouter.navTo("DocList");

                } else if (selectedKey === "oDocExtract") {
                    this.oRouter = this.getOwnerComponent().getRouter();
                    this.oRouter.navTo("DocExtract");

                } else if (selectedKey === "oDocNote") {
                    this.oRouter = this.getOwnerComponent().getRouter();
                    this.oRouter.navTo("DocNote");

                } else {
                    alert("Select valid table");
                }


            }

        });
    });
   