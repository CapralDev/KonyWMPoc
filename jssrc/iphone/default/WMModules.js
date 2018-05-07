//Type your code here
var controllerScope = null;
var activeTONumber = null;
var activeWHNumber = null;
var activeTOHeader = {};
var activeTOItem = {};

function WMGetPickingList(WMNumber, successCallback, errorCallback) {
    printLog("About to call service:" + glbIntegrationServiceName);
    var integrationClient = null;
    var serviceName = glbIntegrationServiceName;
    var operationName = "getWMOPENPICKING";
    var params = {
        "lgnum": WMNumber
    };
    var headers = {};
    var sdkClient = new kony.sdk.getCurrentInstance();
    try {
        integrationClient = sdkClient.getIntegrationService(serviceName);
        integrationClient.invokeOperation(operationName, headers, params, successCallback, errorCallback);
    } catch (e) {
        alert(JSON.stringify(e));
    }
}

function WMConfirmPick(data, successcallback, errorcallback) {
    /*
         "data" is the structure of items for posting to SAP
         The structure consist of the following
         
         lgnum   		- Warehouse Number
         tanum		- TO Number
         tapos		- TO Item Number
         conf_qty		- Confirm Qty
         meins		- Unit of measure
         heat			- Heat number
         trolley		- Trolley number
         pick .   	- P(Partial) C(Complete)
    */
    printLog("About to call service:" + glbIntegrationServiceName);
    var integrationClient = null;
    var serviceName = glbIntegrationServiceName;
    var operationName = "getWMCONFIRMPICKING";
    var params = data;
    var headers = {};
    var sdkClient = new kony.sdk.getCurrentInstance();
    try {
        printLog("Inside WOConfirmPick");
        printLog("Params:" + JSON.stringify(params));
        printLog("sdkClient:" + sdkClient);
        integrationClient = sdkClient.getIntegrationService(serviceName);
        integrationClient.invokeOperation(operationName, headers, params, successcallback, errorcallback);
    } catch (err) {
        alert(JSON.stringify(err));
    }
}