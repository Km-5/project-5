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

        return Controller.extend("demoApp5.project5.controller.DocList", {
            onInit: function () {
                this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this._oRouter.attachRouteMatched(this.handleRouteMatched, this);
            },


            onbuttonpress: function (oEvent) {
                var oView = this.getView();
                var path = oEvent.getSource().getBindingContext("doc_list").getPath();
                // create dialog lazily



                if (!this.byId("openDialog2")) {
                    // load asynchronous XML fragment
                    Fragment.load({
                        id: oView.getId("openDialog2"),
                        name: "demoApp5.project5.fragments.DocList",
                        controller: this
                    }).then(function (oDialog) {
                        // connect dialog to the root view 
                        //of this component (models, lifecycle)
                        oView.addDependent(oDialog);
                        oDialog.bindElement({
                            path: path,
                            model: "doc_list"
                        });
                        oDialog.open();
                    });
                }
            },



            updateDialog: function (oEvent) {


                // Get fields
                var sPackageId = this.getView().byId("ipPackageId").getValue();
                var sJobId = this.getView().byId("ipJobId").getValue();
                var sClientId = this.getView().byId("ipClientId").getValue();
                var sFileName = this.getView().byId("ipFileName").getValue();
                var sDocumentType = this.getView().byId("ipDocumentType").getValue();
                var sIsMain = this.getView().byId("ipIsMain").getValue();
                var sDocCategory = this.getView().byId("ipDocCategory").getValue();
                var sCreatedAt = this.getView().byId("ipCreatedAt").getValue();
                var sCreatedBy = this.getView().byId("ipCreatedBy").getValue();
                var sStatus = this.getView().byId("ipStatus").getValue();
                var sFlag = this.getView().byId("ipFlag").getValue();
                var sUpdatedAt = this.getView().byId("ipUpdatedAt").getValue();
                var sUpdatedBy = this.getView().byId("ipUpdatedBy").getValue();
                var sObjectStoreRef = this.getView().byId("ipObjectStoreRef").getValue();
                var sConfidence = this.getView().byId("ipConfidence").getValue();
                var sSupportingDoc = this.getView().byId("ipSupportingDoc").getValue();



                // create object to modify
                var obj = {
                    "PackageId": sPackageId,
                    "JobId": sJobId,
                    "ClientId": sClientId,
                    "FileName": sFileName,
                    "DocumentType": sDocumentType,
                    "IsMain": sIsMain,
                    "DocCategory": sDocCategory,
                    "CreatedAt": sCreatedAt,
                    "CreatedBy": sCreatedBy,
                    "Status": sStatus,
                    "Flag": sFlag,
                    "UpdatedAt": sUpdatedAt,
                    "UpdatedBy": sUpdatedBy,
                    "ObjectStoreRef": sObjectStoreRef,
                    "Confidence": sConfidence,
                    "SupportingDoc": sSupportingDoc,


                }

                var oModel = this.getOwnerComponent().getModel("doc_list");
                var sPath = oEvent.getSource().getParent().getBindingContext("doc_list").getPath();

                oModel.setProperty(sPath, obj);
                this.byId("openDialog2").destroy();

            },

            closeDialog: function (oEvent) {
                this.byId("openDialog2").destroy();

            },

            onNavBack: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.navTo("View1");
            },
            handleRouteMatched: function (evt) {
                //Check whether is the detail page is matched.
                if (evt.getParameter("name") !== "View1") {
                    return;
                    //You code here to run every time when your detail page is called.
                    var oView = this.getView();
                    oView.byId("idComboBox").setSelectedItem(null);
                }
            }




        });
    });
