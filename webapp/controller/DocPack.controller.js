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

        return Controller.extend("demoApp5.project5.controller.DocPack", {
            onInit: function () {

            },


            onbuttonpress: function (oEvent) {

                var oView = this.getView();
                var path = oEvent.getSource().getBindingContext("doc_pack").getPath();
                // create dialog lazily



                if (!this.byId("openDialog1")) {
                    // load asynchronous XML fragment
                    Fragment.load({
                        id: oView.getId("openDialog1"),
                        name: "demoApp5.project5.fragments.DocPack",
                        controller: this
                    }).then(function (oDialog) {
                        // connect dialog to the root view 
                        //of this component (models, lifecycle)
                        oView.addDependent(oDialog);
                        oDialog.bindElement({
                            path: path,
                            model: "doc_pack"
                        });
                        oDialog.open();
                    });
                }
            },



            updateDialog: function (oEvent) {


                // Get fields
                var sPackageId = this.getView().byId("ipPackageId").getValue();
                var sStatus = this.getView().byId("ipStatus").getValue();
                var sCreatedAt = this.getView().byId("ipCreatedAt").getValue();
                var sCreatedBy = this.getView().byId("ipCreatedBy").getValue();
                var sUpdatedAt = this.getView().byId("ipUpdatedAt").getValue();
                var sUpdatedBy = this.getView().byId("ipUpdatedBy").getValue();
                var sLockedAt = this.getView().byId("ipLockedAt").getValue();
                var sLockedBy = this.getView().byId("ipLockedBy").getValue();
                var sAssignedTo = this.getView().byId("ipAssignedTo").getValue();
                var sFlag = this.getView().byId("ipFlag").getValue();



                // create object to modify
                var obj = {
                    "PackageId": sPackageId,
                    "Status": sStatus,
                    "CreatedAt": sCreatedAt,
                    "CreatedBy": sCreatedBy,
                    "UpdatedAt": sUpdatedAt,
                    "UpdatedBy": sUpdatedBy,
                    "LockedAt": sLockedAt,
                    "LockedBy": sLockedBy,
                    "AssignedTo": sAssignedTo,
                    "Flag": sFlag,


                }

                var oModel = this.getOwnerComponent().getModel("doc_pack");
                var sPath = oEvent.getSource().getParent().getBindingContext("doc_pack").getPath();

                oModel.setProperty(sPath, obj);
                this.byId("openDialog1").destroy();

            },

            closeDialog: function (oEvent) {
                this.byId("openDialog1").destroy();

            },

            onNavBack: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.navTo("View1");

            }



        });
    });
