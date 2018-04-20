//Type your code here
   var controllerScope = null;

   var activeTONumber = null;
   var activeWHNumber = null;
   var activeTOItem = {};

   function WMGetPickingList(WMNumber, successCallback, errorCallback)
    {
       var integrationClient = null;
       var serviceName = "WMPicking";
       var operationName = "getWMOPENPICKING";
       var params = { "lgnum" : WMNumber};
       var headers = {};
       var sdkClient = new kony.sdk.getCurrentInstance();
        
       try{
          integrationClient = sdkClient.getIntegrationService(serviceName);
          integrationClient.invokeOperation(operationName, headers, params, successCallback , errorCallback);

       }catch(e){

           alert(JSON.stringify(e));

       }
    }
