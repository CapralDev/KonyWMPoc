//startup.js file
kony.print = function() {
    return;
};
var globalhttpheaders = {};
var appConfig = {
    appId: "KonyWMPoc",
    appName: "KonyWMPoc",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.250.120",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "KonyWMPoc",
    isturlbase: "https://capral-uat.konycloud.com/services",
    isMFApp: true,
    appKey: "bc9a3fe5139ef7b76be26879e89e1083",
    appSecret: "44b7e44d9ebd49b8c5af0420db360d2",
    serviceUrl: "https://100008224.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100008224.auth.konycloud.com/appconfig",
        "identity_meta": {},
        "integsvc": {
            "WMServiceCOD": "https://capral-uat.konycloud.com/services/WMServiceCOD"
        },
        "service_doc_etag": "00000163296B2208",
        "appId": "1059f670-ee84-4fcb-9e98-f5717bc9b3da",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "WMPickingCOD",
        "reportingsvc": {
            "session": "https://capral-uat.konycloud.com/services/IST",
            "custom": "https://capral-uat.konycloud.com/services/CMS"
        },
        "baseId": "10d0bd1e-bca5-4f77-81e2-af5281a24e3b",
        "login": [{
            "alias": "SAPCOD01",
            "type": "basic",
            "prov": "SAPCOD01",
            "url": "https://100008224.auth.konycloud.com"
        }],
        "services_meta": {
            "WMObjectServiceCOD": {
                "offline": false,
                "metadata_url": "https://capral-uat.konycloud.com/services/metadata/v1/WMObjectServiceCOD",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://capral-uat.konycloud.com/services/data/v1/WMObjectServiceCOD"
            },
            "WMServiceCOD": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://capral-uat.konycloud.com/services/WMServiceCOD"
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
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_barcode"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
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