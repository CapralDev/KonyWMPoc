define("CopyflxRowMessages1", function() {
    return function(controller) {
        var CopyflxRowMessages1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "11.40%",
            "id": "CopyflxRowMessages1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "Copykonymplistbackground1"
        }, {}, {});
        CopyflxRowMessages1.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "90px",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3%",
            "skin": "CopykonymplistImageRound1",
            "width": "90px",
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgUser = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgUser",
            "isVisible": true,
            "skin": "CopyslImage1",
            "src": "konymplistuserimage3.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgUser);
        var lblHeader = new kony.ui.Label({
            "id": "lblHeader",
            "isVisible": true,
            "left": "17.50%",
            "skin": "CopykonymplistHeading1",
            "text": "Wayne Stanley",
            "top": "22%",
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
        var lblSubHeader = new kony.ui.Label({
            "height": "21%",
            "id": "lblSubHeader",
            "isVisible": true,
            "left": "17.50%",
            "skin": "Copykonymplistsubheader1",
            "text": "I am back, after few days",
            "textStyle": {},
            "top": "72.71%",
            "width": "64%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblLastSeen = new kony.ui.Label({
            "id": "lblLastSeen",
            "isVisible": true,
            "right": "3%",
            "skin": "Copykonymplistlocation1",
            "text": "2 days ago",
            "top": "24%",
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
        var imgActive = new kony.ui.Image2({
            "height": "30px",
            "id": "imgActive",
            "isVisible": true,
            "left": "10%",
            "skin": "CopyslImage1",
            "src": "konymplistuserstatus.png",
            "top": "60.50%",
            "width": "30px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblPendingMessages = new kony.ui.Label({
            "bottom": "26%",
            "id": "lblPendingMessages",
            "isVisible": true,
            "right": "3%",
            "skin": "konymplistpendingmessageslabel",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [2, 0, 2, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        CopyflxRowMessages1.add(flxImage, lblHeader, lblSubHeader, lblLastSeen, imgActive, lblPendingMessages);
        return CopyflxRowMessages1;
    }
})