define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDone defined for txtWarehouseNumber **/
    AS_TextField_j3c9ce31e11c4271b74d0520d6d88f30: function AS_TextField_j3c9ce31e11c4271b74d0520d6d88f30(eventobject, changedtext) {
        var self = this;
        this.onIntegrationCall();
    },
    /** onClick defined for btnRefresh **/
    AS_Button_ca3c159648cd4957b819ffdf49668a3e: function AS_Button_ca3c159648cd4957b819ffdf49668a3e(eventobject) {
        var self = this;
        this.onIntegrationCall();
    },
    /** onRowClick defined for segList **/
    AS_Segment_d0a12464fdba416782fe5888db0b3f82: function AS_Segment_d0a12464fdba416782fe5888db0b3f82(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onRowClick();
    },
    /** onClick defined for btnLogout **/
    AS_Button_cd1285f4885e4ababd39a8eb997c9197: function AS_Button_cd1285f4885e4ababd39a8eb997c9197(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    /** preShow defined for frmPickList **/
    AS_Form_g596627881d94a39b34284034369cc90: function AS_Form_g596627881d94a39b34284034369cc90(eventobject) {
        var self = this;
        this.onPreShow();
    }
});