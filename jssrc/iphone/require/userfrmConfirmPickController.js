define({
    //Type your controller code here 
    onPreShow: function() {
        //Clear all values
        this.view.lblBin.text = "";
        this.view.lblCaseNo.text = "";
        this.view.lblItemNumber.text = "";
        this.view.lblMaterialDescription.text = "";
        this.view.lblMaterialNo.text = "";
        this.view.lblOutstanding.text = "";
        this.view.lblQtyRequested.text = "";
        this.view.lblTONumber.text = "";
        this.view.txtBundleID.text = "";
        this.view.txtConfirmQty.text = "";
        this.view.txtHeatNo.text = "";
        this.view.txtScrapQty.text = "";
        //Map from user selection
        this.view.lblBin.text = activeTOItem.BIN;
        this.view.lblCaseNo.text = "";
        this.view.lblItemNumber.text = activeTOItem.TAPOS;
        this.view.lblMaterialDescription.text = activeTOItem.MAKTX;
        this.view.lblMaterialNo.text = activeTOItem.MATNR;
        this.view.lblOutstanding.text = "";
        this.view.lblQtyRequested.text = activeTOItem.VSOLA;
        this.view.lblTONumber.text = activeTONumber;
        this.view.imgMaterial.base64 = activeTOItem.IMAGE;
    },
    launchBarcode: function() {
        barcode.captureBarcode(this.barcodeSuccess.bind(this));
    },
    barcodeSuccess: function(barcodedata, androidScannedText) {
        var platformName = kony.os.deviceInfo().name;
        if (kony.string.startsWith(platformName, "iphone", true)) {
            this.view.txtBundleID.text = ("" + barcodedata.barcodestring).toUpperCase();
        } else if (kony.string.startsWith(platformName, "android", true)) {
            this.view.txtBundleID.text = androidScannedText.toUpperCase();
        }
    },
    getBinary: function() {
        var binaryName = this.view.txtBundleID.text;
        getBinaryContent(binaryName, this.binarySuccessCallback.bind(this), function(err) {
            alert("failed to get binary data");
        });
    },
    binarySuccessCallback: function(bin) {
        //alert("binary content is : " + JSON.stringify(bin));
        this.view.imgMaterial.base64 = bin;
    },
});