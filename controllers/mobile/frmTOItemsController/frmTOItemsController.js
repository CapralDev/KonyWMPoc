define({ 

 //Type your controller code here 

  
     onPreShow:function()
    {
     this.view.segItems.removeAll();
      
      this.onIntegrationCall();
      
    },
  
     onIntegrationCall:function()
    {
      displayLoadingScreen("Retrieving data ...");
       controllerScope = this;
       WMGetPickingList(activeWHNumber, controllerScope.onSuccessCallback.bind(this), function(err){
           dismissLoadingScreen(); 
           alert("Error invoking integration call:"+JSON.stringify(err));
          });
      
    },
  
    
  onSuccessCallback:function(res){
      kony.print("TOItems onSuccessCallback["+JSON.stringify(res)+"]");
      var sapResponse;
      
      var data = [];
    
      if(res.WM_OPEN_PICKING!==null)
        {
                  
          var working = JSON.parse(res.WM_OPEN_PICKING);
          var TO_HEADER = working.TO_HEADER;
          var TO_ITEM = working.TO_ITEM;
          var _RETURN = working._RETURN;
          
          kony.print("WM_OPEN_PICKING:"+JSON.stringify(working));
          
          this.view.segItems.removeAll();
          
          //Check for errors/warnings
          if(_RETURN!==undefined && _RETURN.MESSAGE!=="")
          {
               alert(_RETURN.MESSAGE); 
          }
          
          
          //Populate the header
          if(TO_HEADER!== undefined)
          {
            for(i=0;i<TO_HEADER.length; i++)
            {
              if(TO_HEADER[i].TANUM===activeTONumber)
                {
                  printLog("TO Header:"+JSON.stringify(TO_HEADER[i]));
                  
                  this.view.lblTONumberFieldValue.text = TO_HEADER[i].TANUM;
                  this.view.lblCustomerFieldValue.text = TO_HEADER[i].NAME1;
                  this.view.lblWHNumberValue.text = TO_HEADER[i].LGNUM;
                  this.view.lblCreateDate.text = displaySAPDate(TO_HEADER[i].BDATU);
                }
              
            }
          
          }
          
         
          //Popolate the item list
          if(TO_ITEM!== undefined)
          {
            for(i=0;i<TO_ITEM.length; i++)
            {
              if(TO_ITEM[i].TANUM===activeTONumber)
                {
                   var record = {};
                   record.lblItemNumber = TO_ITEM[i].TAPOS;
                   record.lblMaterialNo = TO_ITEM[i].MATNR;
                   record.lblQty = TO_ITEM[i].VSOLA + " " + TO_ITEM[i].MEINS;
                   record.lblMaterial = TO_ITEM[i].MAKTX;
                   record.lblBinInfo = TO_ITEM[i].VLTYP + "/" + TO_ITEM[i].VLPLA + "/"+ TO_ITEM[i].VLENR;
                   record.imgItemDrawing = {"base64":"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"};
                  
                   
                   data.push(record);
                  }
              
            }
            this.view.segItems.addAll(data);
          
          }
          
          dismissLoadingScreen();
        }
  },
  
 });