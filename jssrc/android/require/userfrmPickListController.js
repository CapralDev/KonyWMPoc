define({
    //Type your controller code here 
    onPreShow: function() {
        this.onIntegrationCall();
        this.view.segList.removeAll();
    },
    onIntegrationCall: function() {
        var integrationClient = null;
        var serviceName = "WMPicking";
        var operationName = "getWMOPENPICKING";
        var params = {
            "lgnum": this.view.txtWarehouseNumber.text
        };
        var headers = {}; //If there are no headers,pass null
        var sdkClient = new kony.sdk.getCurrentInstance();
        try {
            integrationClient = sdkClient.getIntegrationService(serviceName);
            integrationClient.invokeOperation(operationName, headers, params, this.onSuccessCallback, function(err) {
                alert("Error invoking integration call:" + JSON.stringify(err));
            });
        } catch (e) {
            alert(JSON.stringify(e));
        }
    },
    onSuccessCallback: function(res) {
        kony.print("onSuccessCallback[" + JSON.stringify(res) + "]");
        var sapResponse;
        var data = [];
        if (res.WM_OPEN_PICKING !== null) {
            var working = JSON.parse(res.WM_OPEN_PICKING);
            var TO_HEADER = working.TO_HEADER;
            var _RETURN = working._RETURN;
            kony.print("WM_OPEN_PICKING:" + JSON.stringify(working));
            this.view.segList.removeAll();
            if (_RETURN !== undefined && _RETURN.MESSAGE !== "") {
                alert(_RETURN.MESSAGE);
            }
            if (TO_HEADER !== undefined) {
                for (i = 0; i < TO_HEADER.length; i++) {
                    var record = {};
                    record.lblTransferOrderNumber = TO_HEADER[i].TANUM;
                    record.lblCustomer = TO_HEADER[i].NAME1;
                    record.lblDate = TO_HEADER[i].BDATU;
                    data.push(record);
                }
                this.view.segList.addAll(data);
            }
        }
    },
});