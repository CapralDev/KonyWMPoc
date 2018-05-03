define("CopyCopyflxRow", function() {
    return function(controller) {
        var CopyCopyflxRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "CopyCopyflxRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyCopysknFlxfff"
        }, {}, {});
        CopyCopyflxRow.setDefaultUnit(kony.flex.DP);
        var lblTransferOrderNumber = new kony.ui.Label({
            "height": "28%",
            "id": "lblTransferOrderNumber",
            "isVisible": false,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblHeading",
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
        var lblTransferOrderNumberDisplay = new kony.ui.Label({
            "height": "28%",
            "id": "lblTransferOrderNumberDisplay",
            "isVisible": true,
            "left": "5%",
            "maxWidth": "50%",
            "skin": "sknLblHeading",
            "text": "123",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8.05%",
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
            "left": "5%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLabelTOHeaderLite",
            "text": "customer",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "62.04%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPickStatus = new kony.ui.Label({
            "id": "lblPickStatus",
            "isVisible": true,
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "right": "5%",
            "skin": "sknLabelTOHeaderSmall",
            "text": "Qty: Conf:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "40%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDate = new kony.ui.Label({
            "id": "lblDate",
            "isVisible": true,
            "right": "5%",
            "skin": "sknLabelTOHeaderSmall",
            "text": "date",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblStrip = new kony.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStatusYellow",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "3%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        CopyCopyflxRow.add(lblTransferOrderNumber, lblTransferOrderNumberDisplay, lblCustomer, lblPickStatus, lblDate, lblStrip);
        return CopyCopyflxRow;
    }
})