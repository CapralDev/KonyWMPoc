define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for imgBarcode **/
    AS_Label_de5847937126498aa7014a887e676165: function AS_Label_de5847937126498aa7014a887e676165(eventobject, x, y) {
        var self = this;
        this.launchBarcode();
    },
    /** onClick defined for btnGetBinary **/
    AS_Button_dd337116163d4daea94d92e6d1e15f5b: function AS_Button_dd337116163d4daea94d92e6d1e15f5b(eventobject) {
        var self = this;
        this.getBinary();
    },
    /** onClick defined for CopybtnBack0j439638786cd47 **/
    AS_Button_d6570187c09a45f68f80e64a25b60632: function AS_Button_d6570187c09a45f68f80e64a25b60632(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmTOItems");
        ntf.navigate();
    }
});