define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRefresh **/
    AS_Button_b8cbbf2b4d214963906c0e9c06a0f614: function AS_Button_b8cbbf2b4d214963906c0e9c06a0f614(eventobject) {
        var self = this;
        this.onIntegrationCall();
    },
    /** onClick defined for btnBack **/
    AS_Button_bf1e6efc077b442e8fcc2e3f92faa37a: function AS_Button_bf1e6efc077b442e8fcc2e3f92faa37a(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmPickList");
        ntf.navigate();
    },
    /** preShow defined for frmTOItems **/
    AS_Form_a1fdab77096a493fa93c3f59a9caffab: function AS_Form_a1fdab77096a493fa93c3f59a9caffab(eventobject) {
        var self = this;
        this.onPreShow();
    }
});