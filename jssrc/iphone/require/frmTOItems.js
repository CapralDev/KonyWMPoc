define("frmTOItems", function() {
    return function(controller) {
        function addWidgetsfrmTOItems() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "right": "0dp",
                "skin": "sknFlxHeader",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var lblWarehouseNumber = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblWarehouseNumber",
                "isVisible": true,
                "left": "5%",
                "skin": "sknFieldLabel",
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
            var lblWHNumberValue = new kony.ui.Label({
                "centerY": "48.12%",
                "id": "lblWHNumberValue",
                "isVisible": true,
                "left": "34.67%",
                "skin": "sknLabelFieldValueLarge",
                "text": "410",
                "textStyle": {},
                "width": "18.67%",
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
                "left": "-5.92%",
                "onClick": controller.AS_Button_b8cbbf2b4d214963906c0e9c06a0f614,
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
            flxHeader.add(lblWarehouseNumber, lblWHNumberValue, flxRefresh);
            var flxHeaderDetail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "49.98%",
                "clipBounds": true,
                "height": "13.91%",
                "id": "flxHeaderDetail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "sknFlxHeaderDetails",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderDetail.setDefaultUnit(kony.flex.DP);
            var CopylblWarehouseNumber0g7dc387918c449 = new kony.ui.Label({
                "centerY": "20%",
                "id": "CopylblWarehouseNumber0g7dc387918c449",
                "isVisible": true,
                "left": "5.33%",
                "skin": "sknFieldLabel",
                "text": "TO#",
                "textStyle": {},
                "width": "13.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopylblWarehouseNumber0a64eabff27bb41 = new kony.ui.Label({
                "centerY": "20%",
                "id": "CopylblWarehouseNumber0a64eabff27bb41",
                "isVisible": true,
                "left": "46.26%",
                "skin": "sknFieldLabel",
                "text": "Created",
                "textStyle": {},
                "width": "18%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblTONumberFieldValue = new kony.ui.Label({
                "centerY": "20%",
                "id": "lblTONumberFieldValue",
                "isVisible": true,
                "left": "19.92%",
                "skin": "sknFieldLabel",
                "text": "92",
                "textStyle": {},
                "width": "18.67%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblCreateDate = new kony.ui.Label({
                "centerY": "20%",
                "id": "lblCreateDate",
                "isVisible": true,
                "left": "66.03%",
                "skin": "sknFieldLabel",
                "text": "12/04/2018",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblCustomerFieldValue = new kony.ui.Label({
                "centerY": "55%",
                "id": "lblCustomerFieldValue",
                "isVisible": true,
                "left": "5.02%",
                "maxWidth": "80%",
                "skin": "sknFieldLabel",
                "text": "Metricon Limited",
                "textStyle": {},
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxHeaderDetail.add(CopylblWarehouseNumber0g7dc387918c449, CopylblWarehouseNumber0a64eabff27bb41, lblTONumberFieldValue, lblCreateDate, lblCustomerFieldValue);
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var segItems = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgItemDrawing": "imagedrag.png",
                    "lblBinInfo": "Bin Information",
                    "lblItemNumber": "Item Number",
                    "lblMaterial": "Material",
                    "lblMaterialNo": "Material",
                    "lblQty": "Qty: 0/10 EA",
                    "lblStrip": ""
                }, {
                    "imgItemDrawing": "imagedrag.png",
                    "lblBinInfo": "Bin Information",
                    "lblItemNumber": "Item Number",
                    "lblMaterial": "Material",
                    "lblMaterialNo": "Material",
                    "lblQty": "Qty: 0/10 EA",
                    "lblStrip": ""
                }, {
                    "imgItemDrawing": "imagedrag.png",
                    "lblBinInfo": "Bin Information",
                    "lblItemNumber": "Item Number",
                    "lblMaterial": "Material",
                    "lblMaterialNo": "Material",
                    "lblQty": "Qty: 0/10 EA",
                    "lblStrip": ""
                }],
                "groupCells": false,
                "height": "142.73%",
                "id": "segItems",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "CopyCopyflxRow0g3bd18fe97e84c",
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
                    "CopyCopyflxRow0g3bd18fe97e84c": "CopyCopyflxRow0g3bd18fe97e84c",
                    "FlexContainer0b888f7cc6f8845": "FlexContainer0b888f7cc6f8845",
                    "FlexContainer0ff0033e7e14146": "FlexContainer0ff0033e7e14146",
                    "imgItemDrawing": "imgItemDrawing",
                    "lblBinInfo": "lblBinInfo",
                    "lblItemNumber": "lblItemNumber",
                    "lblMaterial": "lblMaterial",
                    "lblMaterialNo": "lblMaterialNo",
                    "lblQty": "lblQty",
                    "lblStrip": "lblStrip"
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
            flxBody.add(segItems);
            var PaddedButtonRound = new kony.ui.FlexContainer({
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "PaddedButtonRound",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0b5344a6905ab49",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            PaddedButtonRound.setDefaultUnit(kony.flex.DP);
            var btnBack = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "ButtonSkinActive",
                "id": "btnBack",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_bf1e6efc077b442e8fcc2e3f92faa37a,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Back",
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
            PaddedButtonRound.add(btnBack);
            this.add(flxHeader, flxHeaderDetail, flxBody, PaddedButtonRound);
        };
        return [{
            "addWidgets": addWidgetsfrmTOItems,
            "enabledForIdleTimeout": false,
            "id": "frmTOItems",
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "preShow": controller.AS_Form_a1fdab77096a493fa93c3f59a9caffab,
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