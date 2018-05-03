var barcodeTrigger = false;
var pickType = null;
define({ 
    
    
 //Type your controller code here 
    onPreShow:function()
    {
      
      //Clear all values
      this.view.lblBin.text = "";
      this.view.lblCaseNo.text = "";
      this.view.lblItemNumber.text = "";
      this.view.lblMaterialDescription.text = "";
      this.view.lblMaterialNo.text = "";
      this.view.lblOutstanding.text = "";
      this.view.lblQtyRequested.text = "";
      this.view.lblTONumber.text = "";
      this.view.lblUOM.text = "";
      
      printLog("Preshow:Barcode trigger:"+barcodeTrigger);
      if(!barcodeTrigger)
      {
        printLog("Preshow:Clear input values");
        this.view.txtBundleID.text = "";
        this.view.txtConfirmQty.text = "";
        this.view.txtHeatNo.text = "";
      }
      else
        {
          printLog("Skip clearing input values and reset barcode trigger");
          barcodeTrigger=false;
        }
      
      
      
      //Map from user selection
      this.view.lblBin.text                 = activeTOItem.BIN;
      this.view.lblCaseNo.text              = activeTOItem.VLENR.toString();
      this.view.lblItemNumber.text          = activeTOItem.TAPOS.toString();
      this.view.lblMaterialDescription.text =  activeTOItem.MAKTX;
      this.view.lblMaterialNo.text          = activeTOItem.MATNR.toString();
      this.view.lblOutstanding.text         = activeTOItem.VSOLA - activeTOItem.CONF_QTY;
      this.view.lblQtyRequested.text        = activeTOItem.VSOLA;
      this.view.lblTONumber.text            = activeTONumber.toString();
      this.view.imgMaterial.base64          = activeTOItem.IMAGE;
      this.view.lblUOM.text                 = activeTOItem.MEINS;
      this.view.lblTOItemNumberDisplay.text = activeTONumber.toString() + " / " + activeTOItem.TAPOS.toString();
      printLog("activeTOItem:"+JSON.stringify(activeTOItem));
      
      
    },
  
    launchBarcode:function(){
       printLog("launchBarcode:set barcodeTrigger to true");
      barcodeTrigger = true;
      controllerScope = this;
       barcode.captureBarcode(controllerScope.barcodeSuccess.bind(this));
       
    },
     
    barcodeSuccess:function(barcodedata, androidScannedText)
    {
      printLog("barcode success:barcodedata:"+JSON.stringify(barcodedata));
      printLog("barcode success:androidScannedText:"+JSON.stringify(androidScannedText));
      var platformName = kony.os.deviceInfo().name;
      printLog("barcode success:platform:"+platformName);
               
	  if(kony.string.startsWith(platformName, "iphone", true)){
		controllerScope.view.txtBundleID.text = (""+barcodedata.barcodestring).toUpperCase();
	  }else if(kony.string.startsWith(platformName, "android", true)){
		controllerScope.view.txtBundleID.text = androidScannedText.toUpperCase();
	  }
    },
    
  onPartialConfirmation:function()
  {
    pickType = "P";
    this.postToSAP("P");
  },
  
  onCompleteConfirmation:function()
  {
    pickType = "C";
    this.postToSAP("C");
  },
  
    postToSAP:function(confirmType){
      //Check input
      if(this.view.txtConfirmQty.text > this.view.lblOutstanding.text)
        {
          alert("Confirm Qty > Outstanding Qty");
          return;
        }
      if(this.view.txtConfirmQty.text ==="0" || this.view.txtConfirmQty.text==="")
        {
          alert("Please enter Confirm Qty");
          return;
        }
     
      if(this.view.txtBundleID.text==="")
        {
          alert("Please enter Bundle or Trolley ID");
          return;
        }
      
      var data = {};
      data.lgnum = activeWHNumber;
      data.tanum = activeTONumber;
      data.tapos = this.view.lblItemNumber.text;
      data.conf_qty = this.view.txtConfirmQty.text;
      data.meins = this.view.lblUOM.text;
      data.heat = this.view.txtHeatNo.text;
      data.trolley = this.view.txtBundleID.text;
      data.pick = confirmType;
      
      WMConfirmPick(data, this.confirmSuccessCallback.bind(this), 
                   function(err){
           alert("Error invoking pick confirmation:"+JSON.stringify(err));
      });
    },
  
    confirmSuccessCallback:function()
    {
        
        this.view.lblOutstanding.text = this.view.lblOutstanding.text - this.view.txtConfirmQty.text;
        
        //Clear fields
        this.view.txtBundleID.text = "";
        this.view.txtConfirmQty.text = "";
        this.view.txtHeatNo.text = "";
        if(pickType==="C")
        {
          navigateToForm("frmTOItems");
        }
        else
        {
          alert("Successfully saved");
        }
    },
    
  
    getBinary:function()
    {
      var binaryName=this.view.txtBundleID.text;
      getBinaryContent( binaryName, this.binarySuccessCallback.bind(this), 
    function(err){
      alert("failed to get binary data");
    }

    );
    },
  
    binarySuccessCallback:function(bin){
       
      //alert("binary content is : " + JSON.stringify(bin));
      this.view.imgMaterial.base64 = bin;
    },
  
 });