define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRefresh **/
    AS_Button_ie9d3a56909c47e990d81a60493870dd: function AS_Button_ie9d3a56909c47e990d81a60493870dd(eventobject) {
        var self = this;
        this.onIntegrationCall();
    },
    /** onRowClick defined for segItems **/
    AS_Segment_fc9b50e7046746c3b5215978a078b949: function AS_Segment_fc9b50e7046746c3b5215978a078b949(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onRowClick();
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