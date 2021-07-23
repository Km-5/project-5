sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, Fragment, History, UIComponent) {
        "use strict";

        return Controller.extend("demoApp5.project5.controller.DocExtract", {
            onInit: function () {

            },


            onbuttonpress: function (oEvent) {
                debugger;
                var oView = this.getView();
                var path = oEvent.getSource().getBindingContext("doc_extract").getPath();
                // create dialog lazily



                if (!this.byId("openDialog3")) {
                    // load asynchronous XML fragment
                    Fragment.load({
                        id: oView.getId(""),
                        name: "demoApp5.project5.fragments.DocExtract",
                        controller: this
                    }).then(function (oDialog) {
                        // connect dialog to the root view 
                        //of this component (models, lifecycle)
                        oView.addDependent(oDialog);
                        oDialog.bindElement({
                            path: path,
                            model: "doc_extract"
                        });
                        oDialog.open();
                    });
                }
            },



            updateDialog: function (oEvent) {


                // Get fields
                var sPackageId = this.getView().byId("ipPackageId").getValue();
                var sSeqNo = this.getView().byId("ipSeqNo").getValue();
                var sMetadata = this.getView().byId("ipMetadata").getValue();
                var sFlag = this.getView().byId("ipFlag").getValue();
                var sCreatedOn = this.getView().byId("ipCreatedOn").getValue();
                var sUpdatedOn = this.getView().byId("ipUpdatedOn").getValue();
                var sCreatedBy = this.getView().byId("ipCreatedBy").getValue();
                var sUpdatedBy = this.getView().byId("ipUpdatedBy").getValue();




                // create object to modify
                var obj = {
                    "PackageId": sPackageId,
                    "SeqNo": sSeqNo,
                    "Metadata": sMetadata,
                    "Flag": sFlag,
                    "CreatedOn": sCreatedOn,
                    "UpdatedOn": sUpdatedOn,
                    "CreatedBy": sCreatedBy,
                    "UpdatedBy": sUpdatedBy,



                }

                var oModel = this.getOwnerComponent().getModel("doc_extract");
                var sPath = oEvent.getSource().getParent().getBindingContext("doc_extract").getPath();

                oModel.setProperty(sPath, obj);
                this.byId("openDialog3").destroy();

            },

            closeDialog: function (oEvent) {
                this.byId("openDialog3").destroy();

            },

            onNavBack: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.navTo("View1");
            }



        });
    });
