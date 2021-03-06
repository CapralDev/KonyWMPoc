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
            var lblTONumber = new kony.ui.Label({
                "centerY": "23.74%",
                "id": "lblTONumber",
                "isVisible": false,
                "left": "5.36%",
                "skin": "sknFieldLabel",
                "text": "92",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "34.03%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTOItemNumberDisplay = new kony.ui.Label({
                "centerY": "25.28%",
                "id": "lblTOItemNumberDisplay",
                "isVisible": true,
                "left": "5.26%",
                "skin": "sknLabelFieldValueNormal",
                "text": "92",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50.69%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblItemNumber = new kony.ui.Label({
                "centerY": "38.46%",
                "id": "lblItemNumber",
                "isVisible": false,
                "left": "27.59%",
                "skin": "sknFieldLabel",
                "text": "1",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "18.67%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBin = new kony.ui.Label({
                "centerY": "59.62%",
                "id": "lblBin",
                "isVisible": true,
                "left": "5.34%",
                "maxWidth": "80%",
                "skin": "sknFieldLabel",
                "text": "Bin Number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMaterialDescription = new kony.ui.Label({
                "centerY": "75.80%",
                "id": "lblMaterialDescription",
                "isVisible": true,
                "left": "5.31%",
                "maxWidth": "80%",
                "skin": "sknFieldLabel",
                "text": "Material Description",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgMaterial = new kony.ui.Image2({
                "height": "43.41%",
                "id": "imgMaterial",
                "isVisible": true,
                "right": "5.03%",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "3.53%",
                "width": "30%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHeaderDetail.add(lblTONumber, lblTOItemNumberDisplay, lblItemNumber, lblBin, lblMaterialDescription, imgMaterial);
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMaterialNo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMaterialNo",
                "isVisible": true,
                "left": "50%",
                "skin": "sknFieldLabel",
                "text": "A100",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCaseNo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCaseNo",
                "isVisible": true,
                "left": "50%",
                "skin": "sknFieldLabel",
                "text": "333333",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCase.add(CopyLabel0j6fa48b0049141, lblCaseNo);
            var flxReqQty = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
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
                "skin": "sknFieldLabelLite",
                "text": "Requested",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "23.61%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0b3d13c8c7db548 = new kony.ui.Label({
                "centerY": "26.20%",
                "id": "CopyLabel0b3d13c8c7db548",
                "isVisible": true,
                "left": "50.03%",
                "skin": "sknFieldLabelLite",
                "text": "Outstanding",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblQtyRequested = new kony.ui.Label({
                "centerY": "62.96%",
                "id": "lblQtyRequested",
                "isVisible": true,
                "left": "5.56%",
                "skin": "sknFieldLabel",
                "text": "333333",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblOutstanding = new kony.ui.Label({
                "centerY": "62.89%",
                "id": "lblOutstanding",
                "isVisible": true,
                "left": "50.00%",
                "skin": "sknFieldLabel",
                "text": "22222",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblUOM = new kony.ui.Label({
                "centerY": "62.77%",
                "id": "lblUOM",
                "isVisible": true,
                "left": "81.94%",
                "skin": "sknFieldLabel",
                "text": "EA",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxReqQty.add(CopyLabel0a4436e39df604d, CopyLabel0b3d13c8c7db548, lblQtyRequested, lblOutstanding, lblUOM);
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "32.00%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [4, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "32.00%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [4, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "32.00%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [4, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgBarcode = new kony.ui.Label({
                "id": "imgBarcode",
                "isVisible": true,
                "left": "308dp",
                "onTouchStart": controller.AS_Label_de5847937126498aa7014a887e676165,
                "skin": "slFontAwesomeIcon",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBundle.add(CopyLabel0f7d171438ffa4b, txtBundleID, imgBarcode);
            var flxConfirmationButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "15%",
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
                "onClick": controller.AS_Button_fd0d8cd6d2ce4b188b5d569aa4cc21d9,
                "skin": "btnConfirmAll",
                "text": "Complete Pick",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
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
                "onClick": controller.AS_Button_c28c821d90ba4b59aa5fd4c929d6be1c,
                "skin": "sknBtnPartialPick",
                "text": "Partial Pick",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0f8685b07bd5c4e.add(btnPartialPick);
            flxConfirmationButtons.add(FlexContainer0d4b47e3ab18340, CopyFlexContainer0f8685b07bd5c4e);
            var CopyPaddedButtonRound0a93f755ebd5647 = new kony.ui.FlexContainer({
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "8%",
                "id": "CopyPaddedButtonRound0a93f755ebd5647",
                "isVisible": false,
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
            }, {});
            CopyFlexContainer0f86a710eb72f4f.add(btnGetBinary);
            CopyPaddedButtonRound0a93f755ebd5647.add(CopyFlexContainer0f86a710eb72f4f);
            var CopyPaddedButtonRound0a9d0c80c48a54d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "8%",
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
            }, {});
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
            "preShow": controller.AS_Form_jbac8c55b1df4679986ffac82e994ea0,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});