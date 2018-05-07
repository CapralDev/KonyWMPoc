//Type your code here
var glbIntegrationServiceName = null;
var glbObjectServiceName = null;
var glbIdentityServiceName = null;
/*
  buildmode 
  0 - Development
  1 - UAT
  2 - Prod
*/
var buildmode = 0;
if (buildmode === 0) //Dev
{
    // Dev setup
    glbIntegrationServiceName = "WMServiceCOD";
    glbObjectServiceName = "WMObjectServiceCOD";
    glbIdentityServiceName = "SAPCOD01";
} else if (buildmode === 1) //UAT
{
    // Test setup
    glbIntegrationServiceName = "WMServiceCOT";
    glbObjectServiceName = "WMObjectServiceCOT";
    glbIdentityServiceName = "SAPCOT01";
}

function navigateToForm(formName) {
    printLog("Navigate to form:" + formName);
    var ntf = new kony.mvc.Navigation(formName);
    ntf.navigate();
}

function displaySAPDate(sapDateInput) {
    //sapDate has the format YYYYMMDD
    printLog("displaySAPDate:BEFORE:" + sapDateInput);
    var sapDate = "";
    sapDate = sapDateInput.toString();
    if (sapDate === "00000000") {
        return "";
    }
    var output = sapDate.substring(6, 8) + "/" + sapDate.substring(4, 6) + "/" + sapDate.substring(0, 4);
    printLog("displaySAPDate:AFTER:" + output);
    return output;
}

function displayLoadingScreen(message) {
    kony.application.showLoadingScreen(null, message, constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {});
}

function dismissLoadingScreen() {
    kony.application.dismissLoadingScreen();
}

function printLog(message) {
    kony.print("XXXXX:" + message);
}

function setImageCache(imageName, imageBinary) {
    kony.store.setItem("IMAGE_CACHE_" + imageName, imageBinary);
}

function getImageCache(imageName) {
    return kony.store.getItem("IMAGE_CACHE_" + imageName);
}

function setWarehouseNumber(warehouseNumber) {
    kony.store.setItem("DEFAULT_WAREHOUSE", warehouseNumber);
}

function getWarehouseNumber() {
    return kony.store.getItem("DEFAULT_WAREHOUSE");
}