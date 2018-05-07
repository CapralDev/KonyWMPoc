//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "KonyWMPoc",
    appName: "KonyWMPoc",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.250.120",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "KonyWMPoc",
    isturlbase: "https://capral-uat.konycloud.com/services",
    isMFApp: true,
    appKey: "6e4a7088ecb5c390fc5379f8ce79cf35",
    appSecret: "9199041614e3d96a3f8ecb142c91df5f",
    serviceUrl: "https://100008224.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100008224.auth.konycloud.com/appconfig",
        "identity_meta": {},
        "integsvc": {
            "WMServiceCOT": "https://capral-uat.konycloud.com/services/WMServiceCOT"
        },
        "service_doc_etag": "00000163297E7F10",
        "appId": "5d907e93-04bb-4a7d-a530-3272d1cebf31",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "WMPickingCOT",
        "reportingsvc": {
            "session": "https://capral-uat.konycloud.com/services/IST",
            "custom": "https://capral-uat.konycloud.com/services/CMS"
        },
        "baseId": "0fe97e99-188a-4c50-b14f-da237cc00e20",
        "login": [{
            "alias": "SAPCOT01",
            "type": "basic",
            "prov": "SAPCOT01",
            "url": "https://100008224.auth.konycloud.com"
        }],
        "services_meta": {
            "WMObjectServiceCOT": {
                "offline": false,
                "metadata_url": "https://capral-uat.konycloud.com/services/metadata/v1/WMObjectServiceCOT",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://capral-uat.konycloud.com/services/data/v1/WMObjectServiceCOT"
            },
            "WMServiceCOT": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://capral-uat.konycloud.com/services/WMServiceCOT"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://capral-uat.konycloud.com/KonyWMPoc/MWServlet",
    secureurl: "https://capral-uat.konycloud.com/KonyWMPoc/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 81160
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("frmLogin");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;