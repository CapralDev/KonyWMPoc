//Type your code here
function getBinaryContent(binaryname, successcallback, errcallback) {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("WMObjectService", {
        "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("media");
    //primary key details to get media object
    dataObject.addField("name", binaryname);
    objSvc.getBinaryContent({
        "dataObject": dataObject,
        "binaryAttrName": "data"
    }, successcallback, errcallback);
}