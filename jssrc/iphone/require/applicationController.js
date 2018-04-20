define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("ListView.AlertsWithoutThumbnails", "AlertsWithoutThumbnails", "AlertsWithoutThumbnailsController");
        kony.application.registerMaster({
            "namespace": "ListView",
            "classname": "AlertsWithoutThumbnails",
            "name": "ListView.AlertsWithoutThumbnails"
        });
        kony.mvc.registry.add("ListView.SkypeMessage", "SkypeMessage", "SkypeMessageController");
        kony.application.registerMaster({
            "namespace": "ListView",
            "classname": "SkypeMessage",
            "name": "ListView.SkypeMessage"
        });
        kony.mvc.registry.add("com.konymp.login", "login", "loginController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "login",
            "name": "com.konymp.login"
        });
        kony.mvc.registry.add("CopyflxRowMessages1", "CopyflxRowMessages1", "CopyflxRowMessages1Controller");
        kony.mvc.registry.add("CopyCopyflxRow0g3bd18fe97e84c", "CopyCopyflxRow0g3bd18fe97e84c", "CopyCopyflxRow0g3bd18fe97e84cController");
        kony.mvc.registry.add("CopyCopyflxRow", "CopyCopyflxRow", "CopyCopyflxRowController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmPickList", "frmPickList", "frmPickListController");
        kony.mvc.registry.add("frmTOItems", "frmTOItems", "frmTOItemsController");
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLogin").navigate();
    }
});