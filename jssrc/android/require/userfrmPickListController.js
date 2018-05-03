define({
    //Type your controller code here 
    onPreShow: function() {
        this.view.segList.removeAll();
        var defaultWarehouseNumber = getWarehouseNumber();
        if (defaultWarehouseNumber === null || defaultWarehouseNumber === "") {
            return;
        } else {
            this.view.txtWarehouseNumber.text = defaultWarehouseNumber;
            this.onIntegrationCall();
        }
    },
    onIntegrationCall: function() {
        printLog("Warehouse number selected:" + this.view.txtWarehouseNumber.text);
        if (this.view.txtWarehouseNumber.text === null || this.view.txtWarehouseNumber.text === "" || this.view.txtWarehouseNumber.text === 0) {
            alert("Please enter a warehouse number");
            return;
        } else {
            displayLoadingScreen("Retrieving data ...");
            controllerScope = this;
            activeWHNumber = this.view.txtWarehouseNumber.text;
            setWarehouseNumber(activeWHNumber);
            WMGetPickingList(activeWHNumber, controllerScope.onSuccessCallback.bind(this), function(err) {
                dismissLoadingScreen();
                alert("Error invoking integration call:" + JSON.stringify(err));
            });
        }
    },
    onSuccessCallback: function(res) {
        kony.print("onSuccessCallback[" + JSON.stringify(res) + "]");
        var sapResponse;
        var data = [];
        if (res.WM_OPEN_PICKING !== null) {
            var working = JSON.parse(res.WM_OPEN_PICKING);
            var TO_HEADER = working.TO_HEADER;
            var TO_ITEM = working.TO_ITEM;
            var _RETURN = working._RETURN;
            kony.print("WM_OPEN_PICKING:" + JSON.stringify(working));
            this.view.segList.removeAll();
            if (_RETURN !== undefined && _RETURN.MESSAGE !== "") {
                alert(_RETURN.MESSAGE);
            }
            if (TO_HEADER !== undefined) {
                for (i = 0; i < TO_HEADER.length; i++) {
                    var record = {};
                    var totalPickQty = 0;
                    var totalReqQty = 0;
                    record.lblTransferOrderNumber = TO_HEADER[i].TANUM;
                    record.lblTransferOrderNumberDisplay = TO_HEADER[i].TANUM.toString();
                    record.lblCustomer = TO_HEADER[i].NAME1;
                    record.lblDate = displaySAPDate(TO_HEADER[i].BDATU);
                    //Check items
                    for (j = 0; j < TO_ITEM.length; j++) {
                        if (TO_ITEM[j].TANUM === record.lblTransferOrderNumber) {
                            totalPickQty += TO_ITEM[j].CONF_QTY;
                            totalReqQty += TO_ITEM[j].VSOLA;
                        }
                    }
                    record.lblPickStatus = "Req: " + totalReqQty + " Conf: " + totalPickQty;
                    if (totalPickQty === 0) {
                        record.lblStrip = {
                            "skin": "sknLblStatusRed"
                        };
                    } else if (totalPickQty !== totalReqQty) {
                        record.lblStrip = {
                            "skin": "sknLblStatusYellow"
                        };
                    } else {
                        record.lblStrip = {
                            "skin": "sknLblStatusGreen"
                        };
                    }
                    data.push(record);
                }
                this.view.segList.addAll(data);
            }
        }
        dismissLoadingScreen();
    },
    onRowClick: function() {
        var selectedRow = this.view.segList.selectedRowItems;
        activeTONumber = selectedRow[0].lblTransferOrderNumber;
        activeTOHeader = {};
        activeTOHeader.TANUM_DISP = selectedRow[0].lblTransferOrderNumberDisplay;
        activeTOHeader.TANUM = selectedRow[0].lblTransferOrderNumber;
        activeTOHeader.CUSTOMER = selectedRow[0].lblCustomer;
        activeTOHeader.PICK_STATUS = selectedRow[0].lblPickStatus;
        activeTOHeader.DATE = selectedRow[0].lblDate;
        navigateToForm("frmTOItems");
    },
});