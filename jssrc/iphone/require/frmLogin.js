define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var login = new com.konymp.login({
                "clipBounds": true,
                "height": "100%",
                "id": "login",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "konymploginGradiantSkin",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            login.logoScaleMode = constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO;
            login.logoSource = "capral.png";
            login.passwordPlaceholder = "Password";
            login.socialLoginVisible = false;
            login.submitButtonText = "Login";
            login.touchIDProperty = false;
            login.usernameMaxChar = 30;
            login.usernamePlaceholder = "User ID";
            login.encryptCredentials = true;
            login.passwordMinimumChar = 5;
            login.usernameMinimumChar = 5;
            login.passwordValidationMsg = "Password Too Small";
            login.usernameValidationMsg = "Username Too Small";
            login.providerName = "SAPCOD01";
            login.loginSuccessEvent = controller.AS_UWI_ffa11c459f604877bcc41b332d3b7723;
            this.add(login);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});