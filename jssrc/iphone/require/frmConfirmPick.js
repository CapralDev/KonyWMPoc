define("frmConfirmPick", function() {
    return function(controller) {
        function addWidgetsfrmConfirmPick() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeaderDetail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "49.98%",
                "clipBounds": true,
                "height": "25%",
                "id": "flxHeaderDetail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "sknFlxHeaderDetails",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderDetail.setDefaultUnit(kony.flex.DP);
            var lblTONumberLabel = new kony.ui.Label({
                "centerY": "20%",
                "id": "lblTONumberLabel",
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
            var lblTONumber = new kony.ui.Label({
                "centerY": "20.05%",
                "id": "lblTONumber",
                "isVisible": true,
                "left": "27.59%",
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
            var lblItemNoLabel = new kony.ui.Label({
                "centerY": "38.46%",
                "id": "lblItemNoLabel",
                "isVisible": true,
                "left": "5.32%",
                "skin": "sknFieldLabel",
                "text": "Item No",
                "textStyle": {},
                "width": "20.00%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblItemNumber = new kony.ui.Label({
                "centerY": "38.46%",
                "id": "lblItemNumber",
                "isVisible": true,
                "left": "27.59%",
                "skin": "sknFieldLabel",
                "text": "1",
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
            var lblBin = new kony.ui.Label({
                "centerY": "59.62%",
                "id": "lblBin",
                "isVisible": true,
                "left": "5.34%",
                "maxWidth": "80%",
                "skin": "sknFieldLabel",
                "text": "Bin Number",
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
            var lblMaterialDescription = new kony.ui.Label({
                "centerY": "75.80%",
                "id": "lblMaterialDescription",
                "isVisible": true,
                "left": "5.31%",
                "maxWidth": "80%",
                "skin": "sknFieldLabel",
                "text": "Material Description",
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
            var imgMaterial = new kony.ui.Image2({
                "height": "40%",
                "id": "imgMaterial",
                "isVisible": true,
                "right": "5%",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "12%",
                "width": "30%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHeaderDetail.add(lblTONumberLabel, lblTONumber, lblItemNoLabel, lblItemNumber, lblBin, lblMaterialDescription, imgMaterial);
            var flxMaterial = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxMaterial",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlexDetail",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMaterial.setDefaultUnit(kony.flex.DP);
            var Label0d5832c85d1414f = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0d5832c85d1414f",
                "isVisible": true,
                "left": "5%",
                "skin": "sknFieldLabel",
                "text": "Material",
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
            var lblMaterialNo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMaterialNo",
                "isVisible": true,
                "left": "50%",
                "skin": "sknFieldLabel",
                "text": "A100",
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
            flxMaterial.add(Label0d5832c85d1414f, lblMaterialNo);
            var flxCase = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxCase",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "sknFlexDetail",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCase.setDefaultUnit(kony.flex.DP);
            var CopyLabel0j6fa48b0049141 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0j6fa48b0049141",
                "isVisible": true,
                "left": "5%",
                "skin": "sknFieldLabel",
                "text": "Case No",
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
            var lblCaseNo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCaseNo",
                "isVisible": true,
                "left": "50%",
                "skin": "sknFieldLabel",
                "text": "333333",
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
            flxCase.add(CopyLabel0j6fa48b0049141, lblCaseNo);
            var flxReqQty = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10.82%",
                "id": "flxReqQty",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "sknFlexDetail",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReqQty.setDefaultUnit(kony.flex.DP);
            var CopyLabel0a4436e39df604d = new kony.ui.Label({
                "centerY": "26.14%",
                "id": "CopyLabel0a4436e39df604d",
                "isVisible": true,
                "left": "4.97%",
                "skin": "sknFieldLabel",
                "text": "Requested",
                "textStyle": {},
                "width": "23.61%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopyLabel0b3d13c8c7db548 = new kony.ui.Label({
                "centerY": "26.20%",
                "id": "CopyLabel0b3d13c8c7db548",
                "isVisible": true,
                "left": "50.03%",
                "skin": "sknFieldLabel",
                "text": "Outstanding",
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
            var lblQtyRequested = new kony.ui.Label({
                "centerY": "62.96%",
                "id": "lblQtyRequested",
                "isVisible": true,
                "left": "5.56%",
                "skin": "sknFieldLabel",
                "text": "333333",
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
            var lblOutstanding = new kony.ui.Label({
                "centerY": "62.89%",
                "id": "lblOutstanding",
                "isVisible": true,
                "left": "50.00%",
                "skin": "sknFieldLabel",
                "text": "22222",
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
            flxReqQty.add(CopyLabel0a4436e39df604d, CopyLabel0b3d13c8c7db548, lblQtyRequested, lblOutstanding);
            var flxConfirmQty = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxConfirmQty",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "sknFlexDetail",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConfirmQty.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b4ae51f60eac48 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0b4ae51f60eac48",
                "isVisible": true,
                "left": "5%",
                "skin": "sknFieldLabel",
                "text": "Confirm Qty",
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
            var txtConfirmQty = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50.20%",
                "focusSkin": "TextFieldRoundFocusSkin",
                "height": "70%",
                "id": "txtConfirmQty",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "50.00%",
                "secureTextEntry": false,
                "skin": "sknTextBoxInputField",
                "text": "1",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "32.00%",
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
            flxConfirmQty.add(CopyLabel0b4ae51f60eac48, txtConfirmQty);
            var flxHeatNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxHeatNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "sknFlexDetail",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeatNo.setDefaultUnit(kony.flex.DP);
            var CopyLabel0c388b39be55d44 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0c388b39be55d44",
                "isVisible": true,
                "left": "5%",
                "skin": "sknFieldLabel",
                "text": "Heat No",
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
            var txtHeatNo = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50.20%",
                "focusSkin": "TextFieldRoundFocusSkin",
                "height": "70%",
                "id": "txtHeatNo",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "50.00%",
                "secureTextEntry": false,
                "skin": "sknTextBoxInputField",
                "text": "123",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "32.00%",
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
            flxHeatNo.add(CopyLabel0c388b39be55d44, txtHeatNo);
            var flxBundle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxBundle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlexDetail",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBundle.setDefaultUnit(kony.flex.DP);
            var CopyLabel0f7d171438ffa4b = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0f7d171438ffa4b",
                "isVisible": true,
                "left": "5%",
                "skin": "sknFieldLabel",
                "text": "Bundle/Trolley ID",
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
            var txtBundleID = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50.20%",
                "focusSkin": "TextFieldRoundFocusSkin",
                "height": "70%",
                "id": "txtBundleID",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "50.00%",
                "secureTextEntry": false,
                "skin": "sknTextBoxInputField",
                "text": "12345",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "32.00%",
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
            var imgBarcode = new kony.ui.Label({
                "id": "imgBarcode",
                "isVisible": true,
                "left": "308dp",
                "onTouchStart": controller.AS_Label_de5847937126498aa7014a887e676165,
                "skin": "slFontAwesomeIcon",
                "text": "",
                "textStyle": {},
                "top": "14dp",
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
            flxBundle.add(CopyLabel0f7d171438ffa4b, txtBundleID, imgBarcode);
            var flxConfirmationButtons = new kony.ui.FlexContainer({
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxConfirmationButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0b5344a6905ab49",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConfirmationButtons.setDefaultUnit(kony.flex.DP);
            var FlexContainer0d4b47e3ab18340 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer0d4b47e3ab18340",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "skin": "slFbox",
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0d4b47e3ab18340.setDefaultUnit(kony.flex.DP);
            var btnCompletePick = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "85%",
                "id": "btnCompletePick",
                "isVisible": true,
                "skin": "ButtonSkinNormal",
                "text": "Complete Pick",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            FlexContainer0d4b47e3ab18340.add(btnCompletePick);
            var CopyFlexContainer0f8685b07bd5c4e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "CopyFlexContainer0f8685b07bd5c4e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0f8685b07bd5c4e.setDefaultUnit(kony.flex.DP);
            var btnPartialPick = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "85%",
                "id": "btnPartialPick",
                "isVisible": true,
                "skin": "ButtonSkinNormal",
                "text": "Partial Pick",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            CopyFlexContainer0f8685b07bd5c4e.add(btnPartialPick);
            flxConfirmationButtons.add(FlexContainer0d4b47e3ab18340, CopyFlexContainer0f8685b07bd5c4e);
            var CopyPaddedButtonRound0a93f755ebd5647 = new kony.ui.FlexContainer({
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "CopyPaddedButtonRound0a93f755ebd5647",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0b5344a6905ab49",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyPaddedButtonRound0a93f755ebd5647.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0f86a710eb72f4f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "CopyFlexContainer0f86a710eb72f4f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0f86a710eb72f4f.setDefaultUnit(kony.flex.DP);
            var btnGetBinary = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "85%",
                "id": "btnGetBinary",
                "isVisible": true,
                "onClick": controller.AS_Button_dd337116163d4daea94d92e6d1e15f5b,
                "skin": "ButtonSkinNormal",
                "text": "Get Media",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            CopyFlexContainer0f86a710eb72f4f.add(btnGetBinary);
            CopyPaddedButtonRound0a93f755ebd5647.add(CopyFlexContainer0f86a710eb72f4f);
            var CopyPaddedButtonRound0a9d0c80c48a54d = new kony.ui.FlexContainer({
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "CopyPaddedButtonRound0a9d0c80c48a54d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0b5344a6905ab49",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyPaddedButtonRound0a9d0c80c48a54d.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0d6fe7e66ee7a4b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "CopyFlexContainer0d6fe7e66ee7a4b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0d6fe7e66ee7a4b.setDefaultUnit(kony.flex.DP);
            var CopybtnBack0j439638786cd47 = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "85%",
                "id": "CopybtnBack0j439638786cd47",
                "isVisible": true,
                "onClick": controller.AS_Button_d6570187c09a45f68f80e64a25b60632,
                "skin": "ButtonSkinNormal",
                "text": "Back",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            CopyFlexContainer0d6fe7e66ee7a4b.add(CopybtnBack0j439638786cd47);
            CopyPaddedButtonRound0a9d0c80c48a54d.add(CopyFlexContainer0d6fe7e66ee7a4b);
            this.add(flxHeaderDetail, flxMaterial, flxCase, flxReqQty, flxConfirmQty, flxHeatNo, flxBundle, flxConfirmationButtons, CopyPaddedButtonRound0a93f755ebd5647, CopyPaddedButtonRound0a9d0c80c48a54d);
        };
        return [{
            "addWidgets": addWidgetsfrmConfirmPick,
            "enabledForIdleTimeout": false,
            "id": "frmConfirmPick",
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
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