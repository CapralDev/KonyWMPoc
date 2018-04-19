define("CopyCopyflxRow", function() {
    return function(controller) {
        var CopyCopyflxRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "11%",
            "id": "CopyCopyflxRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyCopysknFlxfff"
        }, {}, {});
        CopyCopyflxRow.setDefaultUnit(kony.flex.DP);
        var lblTransferOrderNumber = new kony.ui.Label({
            "height": "28%",
            "id": "lblTransferOrderNumber",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "CopysknLblHeading",
            "text": "Transfer Order Number",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblCustomer = new kony.ui.Label({
            "bottom": "10%",
            "id": "lblCustomer",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "CopyCopyslLabel",
            "text": "Customer name",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDate = new kony.ui.Label({
            "id": "lblDate",
            "isVisible": true,
            "right": "9%",
            "skin": "CopyCopyslLabel1",
            "text": "10/01/2018",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgArrow = new kony.ui.Image2({
            "bottom": "25%",
            "centerY": "50%",
            "height": "34.26%",
            "id": "imgArrow",
            "isVisible": true,
            "right": "3.50%",
            "skin": "CopyCopyslImage1",
            "src": "chevron.png",
            "width": "5%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip = new kony.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "CopykonympALsknLblStrip",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        CopyCopyflxRow.add(lblTransferOrderNumber, lblCustomer, lblDate, imgArrow, lblStrip);
        return CopyCopyflxRow;
    }
})