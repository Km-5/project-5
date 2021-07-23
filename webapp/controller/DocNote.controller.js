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

        return Controller.extend("demoApp5.project5.controller.DocNote", {
            onInit: function () {

            },


            onbuttonpress: function (oEvent) {
                var oView = this.getView();
                var path = oEvent.getSource().getBindingContext("doc_notes").getPath();
                // create dialog lazily



                if (!this.byId("openDialog4")) {
                    // load asynchronous XML fragment
                    Fragment.load({
                        id: oView.getId("openDialog4"),
                        name: "demoApp5.project5.fragments.DocNote",
                        controller: this
                    }).then(function (oDialog) {
                        // connect dialog to the root view 
                        //of this component (models, lifecycle)
                        oView.addDependent(oDialog);
                        oDialog.bindElement({
                            path: path,
                            model: "doc_notes"
                        });
                        oDialog.open();
                    });
                }
            },



            updateDialog: function (oEvent) {


                // Get fields
                var sPackageId = this.getView().byId("ipPackageId").getValue();
                var sSeqNo = this.getView().byId("ipSeqNo").getValue();
                var sCreatedAt = this.getView().byId("ipCreatedAt").getValue();
                var sCreatedBy = this.getView().byId("ipCreatedBy").getValue();
                var sSubject = this.getView().byId("ipSubject").getValue();
                var sNote = this.getView().byId("ipNote").getValue();





                // create object to modify
                var obj = {
                    "PackageId": sPackageId,
                    "SeqNo": sSeqNo,
                    "CreatedAt": sCreatedAt,
                    "CreatedBy": sCreatedBy,
                    "Subject": sSubject,
                    "Note": sNote,


                }

                var oModel = this.getOwnerComponent().getModel("doc_notes");
                var sPath = oEvent.getSource().getParent().getBindingContext("doc_notes").getPath();

                oModel.setProperty(sPath, obj);
                this.byId("openDialog4").destroy();

            },

            closeDialog: function (oEvent) {
                this.byId("openDialog4").destroy();

            },

            onNavBack: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.navTo("View1");

            }





        });
    });
