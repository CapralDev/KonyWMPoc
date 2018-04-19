//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "CapralWM",
    appName: "CapralWM",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.250.120",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "CapralWM",
    isturlbase: "https://capral-uat.konycloud.com/services",
    isMFApp: true,
    appKey: "9bf924e5ebff1bd89370ac4433e085ee",
    appSecret: "74bf6c12a24ebadeec0aeff70455b5b6",
    serviceUrl: "https://100008224.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100008224.auth.konycloud.com/appconfig",
        "identity_meta": {},
        "integsvc": {
            "WMPicking": "https://capral-uat.konycloud.com/services/WMPicking"
        },
        "appId": "83894653-e0f1-471c-97c9-8f2d1849f96d",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "WMPicking",
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
            "WMPicking": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://capral-uat.konycloud.com/services/WMPicking"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://capral-uat.konycloud.com/CapralWM/MWServlet",
    secureurl: "https://capral-uat.konycloud.com/CapralWM/MWServlet"
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
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;