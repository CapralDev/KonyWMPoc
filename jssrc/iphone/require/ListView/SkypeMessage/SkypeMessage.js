define(function() {
    return function(controller) {
        var SkypeMessage = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "SkypeMessage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox1",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        SkypeMessage.setDefaultUnit(kony.flex.DP);
        var segMessages = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgActive": "",
                "imgUser": "konymp_user_image_1.png",
                "lblHeader": "Wayne Stanley",
                "lblLastSeen": "9 June",
                "lblPendingMessages": "15",
                "lblSubHeader": "I am back, after few days"
            }, {
                "imgActive": "konymplistuserstatus.png",
                "imgUser": "konymp_user_image_2.png",
                "lblHeader": "Lola Phillips",
                "lblLastSeen": "2 days ago",
                "lblPendingMessages": "",
                "lblSubHeader": "What do motivational thoughts do?"
            }, {
                "imgActive": "",
                "imgUser": "konymp_user_image_3.png",
                "lblHeader": "Cordelia Murray",
                "lblLastSeen": "Yesterday",
                "lblPendingMessages": "22",
                "lblSubHeader": "Dream interpretation has many forms"
            }, {
                "imgActive": "",
                "imgUser": "konymp_user_image_4.png",
                "lblHeader": "Ollie Logan",
                "lblLastSeen": "4 hours ago",
                "lblPendingMessages": "",
                "lblSubHeader": "Pain may sometimes be the reason"
            }, {
                "imgActive": "",
                "imgUser": "konymp_user_image_5.png",
                "lblHeader": "Jeremy Graves",
                "lblLastSeen": "2 days ago",
                "lblPendingMessages": "",
                "lblSubHeader": "Motivation is the key to positivity in our"
            }, {
                "imgActive": "",
                "imgUser": "konymp_user_image_1.png",
                "lblHeader": "Adele Joseph",
                "lblLastSeen": "Yesterday",
                "lblPendingMessages": "8",
                "lblSubHeader": "Call - 28 min 14 s"
            }, {
                "imgActive": "konymplistuserstatus.png",
                "imgUser": "konymp_user_image_2.png",
                "lblHeader": "Isaiah Hayes",
                "lblLastSeen": "4 hours ago",
                "lblPendingMessages": "",
                "lblSubHeader": "Do you sometimes have the feeling that"
            }, {
                "imgActive": "konymplistuserstatus.png",
                "imgUser": "konymp_user_image_3.png",
                "lblHeader": "Sally Gardner",
                "lblLastSeen": "9 June",
                "lblPendingMessages": "",
                "lblSubHeader": "I am back, after few days"
            }, {
                "imgActive": "",
                "imgUser": "konymp_user_image_4.png",
                "lblHeader": "Abhishek Singh",
                "lblLastSeen": "13 July",
                "lblPendingMessages": "1",
                "lblSubHeader": "Pain may sometimes be the reason"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segMessages",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg2",
            "rowSkin": "Copyseg3",
            "rowTemplate": "CopyflxRowMessages1",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopysliPhoneSegmentHeader1",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "d3d3d300",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxImage": "flxImage",
                "flxRowMessages": "flxRowMessages",
                "imgActive": "imgActive",
                "imgUser": "imgUser",
                "lblHeader": "lblHeader",
                "lblLastSeen": "lblLastSeen",
                "lblPendingMessages": "lblPendingMessages",
                "lblSubHeader": "lblSubHeader"
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": false,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": false
        });
        SkypeMessage.add(segMessages);
        return SkypeMessage;
    }
})