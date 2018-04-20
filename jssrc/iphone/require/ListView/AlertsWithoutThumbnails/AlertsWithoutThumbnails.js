define(function() {
    return function(controller) {
        var AlertsWithoutThumbnails = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "AlertsWithoutThumbnails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopysknFlxfff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        AlertsWithoutThumbnails.setDefaultUnit(kony.flex.DP);
        var segList = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "lblCustomer": "This article is floated online with an intent for an example.",
                "lblDate": "2 days ago",
                "lblStrip": "L",
                "lblTransferOrderNumber": "System Notification"
            }, {
                "lblCustomer": "Here, I focus on a range of items and features that we use in life.",
                "lblDate": "Yesterday",
                "lblStrip": "",
                "lblTransferOrderNumber": "System Notification"
            }, {
                "lblCustomer": "Having used discount toner cartridges for twenty years, there are",
                "lblDate": "Yesterday",
                "lblStrip": "",
                "lblTransferOrderNumber": "System Notification"
            }, {
                "lblCustomer": "This article is floated online with an intent for an example.",
                "lblDate": "Yesterday",
                "lblStrip": "",
                "lblTransferOrderNumber": "System Notification"
            }, {
                "lblCustomer": "Here, I focus on a range of items and features that we use in life.",
                "lblDate": "Yesterday",
                "lblStrip": "L",
                "lblTransferOrderNumber": "System Notification"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "CopyCopyseg2",
            "rowSkin": "CopyCopyseg3",
            "rowTemplate": "CopyCopyflxRow",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader1",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "c8c7cc00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "CopyCopyflxRow": "CopyCopyflxRow",
                "lblCustomer": "lblCustomer",
                "lblDate": "lblDate",
                "lblStrip": "lblStrip",
                "lblTransferOrderNumber": "lblTransferOrderNumber"
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
        AlertsWithoutThumbnails.add(segList);
        return AlertsWithoutThumbnails;
    }
})