define("frmPickList", function() {
    return function(controller) {
        function addWidgetsfrmPickList() {
            this.setDefaultUnit(kony.flex.DP);
            var flxWHNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxWHNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "right": "0dp",
                "skin": "sknFlxHeader",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWHNumber.setDefaultUnit(kony.flex.DP);
            var txtWarehouseNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "TextFieldRoundFocusSkin",
                "height": "70%",
                "id": "txtWarehouseNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "31.94%",
                "onDone": controller.AS_TextField_j3c9ce31e11c4271b74d0520d6d88f30,
                "placeholder": "Enter a value",
                "secureTextEntry": false,
                "skin": "sknTextBoxInputField",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "34.72%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [4, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblWarehouseNumber = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblWarehouseNumber",
                "isVisible": true,
                "left": "5%",
                "skin": "sknFieldLabelLite",
                "text": "Warehouse Number",
                "textStyle": {},
                "width": "29.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxRefresh = new kony.ui.FlexContainer({
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRefresh",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "right": "3%",
                "skin": "slFbox0dcb22a84616545",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxRefresh.setDefaultUnit(kony.flex.DP);
            var btnRefresh = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "70%",
                "id": "btnRefresh",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_ca3c159648cd4957b819ffdf49668a3e,
                "skin": "sknButton",
                "text": "Refresh",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxRefresh.add(btnRefresh);
            flxWHNumber.add(txtWarehouseNumber, lblWarehouseNumber, flxRefresh);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "82%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var segList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblCustomer": "Customer name",
                    "lblDate": "10/01/2018",
                    "lblPickStatus": "customer",
                    "lblStrip": "",
                    "lblTransferOrderNumber": "Transfer Order Number",
                    "lblTransferOrderNumberDisplay": "Transfer Order Number"
                }, {
                    "lblCustomer": "Customer name",
                    "lblDate": "10/01/2018",
                    "lblPickStatus": "customer",
                    "lblStrip": "",
                    "lblTransferOrderNumber": "Transfer Order Number",
                    "lblTransferOrderNumberDisplay": "Transfer Order Number"
                }, {
                    "lblCustomer": "Customer name",
                    "lblDate": "10/01/2018",
                    "lblPickStatus": "customer",
                    "lblStrip": "",
                    "lblTransferOrderNumber": "Transfer Order Number",
                    "lblTransferOrderNumberDisplay": "Transfer Order Number"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segList",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_d0a12464fdba416782fe5888db0b3f82,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "CopyCopyflxRow",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "CopyCopyflxRow": "CopyCopyflxRow",
                    "lblCustomer": "lblCustomer",
                    "lblDate": "lblDate",
                    "lblPickStatus": "lblPickStatus",
                    "lblStrip": "lblStrip",
                    "lblTransferOrderNumber": "lblTransferOrderNumber",
                    "lblTransferOrderNumberDisplay": "lblTransferOrderNumberDisplay"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxMain.add(segList);
            var PaddedButtonRound = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "8%",
                "id": "PaddedButtonRound",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0a7fc81c51a2545",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            PaddedButtonRound.setDefaultUnit(kony.flex.DP);
            var btnLogout = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "ButtonSkinActive",
                "id": "btnLogout",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_cd1285f4885e4ababd39a8eb997c9197,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Logout",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            PaddedButtonRound.add(btnLogout);
            this.add(flxWHNumber, flxMain, PaddedButtonRound);
        };
        return [{
            "addWidgets": addWidgetsfrmPickList,
            "enabledForIdleTimeout": false,
            "id": "frmPickList",
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "preShow": controller.AS_Form_g596627881d94a39b34284034369cc90,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
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