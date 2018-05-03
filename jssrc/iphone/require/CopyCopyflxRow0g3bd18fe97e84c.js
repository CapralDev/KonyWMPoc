define("CopyCopyflxRow0g3bd18fe97e84c", function() {
    return function(controller) {
        var CopyCopyflxRow0g3bd18fe97e84c = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "CopyCopyflxRow0g3bd18fe97e84c",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyCopysknFlxfff"
        }, {}, {});
        CopyCopyflxRow0g3bd18fe97e84c.setDefaultUnit(kony.flex.DP);
        var FlexContainer0b888f7cc6f8845 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0b888f7cc6f8845",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0%",
            "width": "70%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0b888f7cc6f8845.setDefaultUnit(kony.flex.DP);
        var lblItemNumber = new kony.ui.Label({
            "height": "28%",
            "id": "lblItemNumber",
            "isVisible": false,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblHeading",
            "text": "Item Number",
            "textStyle": {},
            "top": "8%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblDrawing = new kony.ui.Label({
            "height": "28%",
            "id": "lblDrawing",
            "isVisible": false,
            "left": "14%",
            "maxWidth": "50%",
            "skin": "sknLblHeading",
            "textStyle": {},
            "top": "18%",
            "width": "45%",
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
            "height": "28%",
            "id": "lblMaterialNo",
            "isVisible": true,
            "left": "3.97%",
            "maxWidth": "50%",
            "skin": "sknLabelFieldValueNormal",
            "text": "Material",
            "textStyle": {},
            "top": "7.89%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblQty = new kony.ui.Label({
            "height": "28%",
            "id": "lblQty",
            "isVisible": true,
            "maxWidth": "50%",
            "right": 0,
            "skin": "sknLabelFieldValueNormal",
            "text": "100 EA",
            "textStyle": {},
            "top": "8.13%",
            "width": "25.00%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblMaterial = new kony.ui.Label({
            "bottom": "10%",
            "id": "lblMaterial",
            "isVisible": true,
            "left": "3.97%",
            "maxNumberOfLines": 3,
            "maxWidth": "90%",
            "skin": "CopyCopyslLabel",
            "text": "Material",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "38.38%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblBinInfo = new kony.ui.Label({
            "bottom": "10%",
            "id": "lblBinInfo",
            "isVisible": true,
            "left": "3.97%",
            "maxNumberOfLines": 3,
            "maxWidth": "90%",
            "skin": "sknFieldLabelLite",
            "text": "Bin Information",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "61.61%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblStrip = new kony.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "CopykonympALsknLblStrip",
            "textStyle": {},
            "top": "0dp",
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
        FlexContainer0b888f7cc6f8845.add(lblItemNumber, lblDrawing, lblMaterialNo, lblQty, lblMaterial, lblBinInfo, lblStrip);
        var FlexContainer0ff0033e7e14146 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0ff0033e7e14146",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "70%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0ff0033e7e14146.setDefaultUnit(kony.flex.DP);
        var imgItemDrawing = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "90%",
            "id": "imgItemDrawing",
            "isVisible": true,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "90%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0ff0033e7e14146.add(imgItemDrawing);
        CopyCopyflxRow0g3bd18fe97e84c.add(FlexContainer0b888f7cc6f8845, FlexContainer0ff0033e7e14146);
        return CopyCopyflxRow0g3bd18fe97e84c;
    }
})