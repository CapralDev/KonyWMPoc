define({ 

 //Type your controller code here 

  
     onPreShow:function()
    {
      this.view.lblTONumberDisplay.text =  activeTOHeader.TANUM_DISP;
      this.view.lblTONumberFieldValue.text = activeTOHeader.TANUM;
       this.view.lblCustomerFieldValue.text = activeTOHeader.CUSTOMER;
       this.view.lblOverallStatus.text =  activeTOHeader.PICK_STATUS;
       this.view.lblCreateDate.text = activeTOHeader.DATE;
      
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
          var totalPickQty = 0;
          var totalReqQty  = 0;
          
          kony.print("WM_OPEN_PICKING:"+JSON.stringify(working));
          
          this.view.segItems.removeAll();
          
          //Check for errors/warnings
          if(_RETURN!==undefined && _RETURN.MESSAGE!=="")
          {
               alert(_RETURN.MESSAGE); 
          }
          
          
          //Populate the header
          if(TO_ITEM!== undefined)
          {
          
                  //Check items
                 for(j=0;j<TO_ITEM.length; j++)
                 {
                   if(TO_ITEM[j].TANUM===activeTONumber)  
                   {
                      totalPickQty+=TO_ITEM[j].CONF_QTY;
                      totalReqQty +=TO_ITEM[j].VSOLA;
                   }
                  }
                 this.view.lblOverallStatus.text = "Req: "+totalReqQty +" Conf: "+totalPickQty;
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
                   record.lblMaterialNoDisplay = TO_ITEM[i].TAPOS + " / " + TO_ITEM[i].MATNR.toString();
                   record.lblQty = TO_ITEM[i].VSOLA;
                   record.lblUOM = TO_ITEM[i].MEINS;
                   record.lblMaterial = TO_ITEM[i].MAKTX;
                   record.lblDrawing = TO_ITEM[i].ZEINR;
                   record.lblBinInfo = TO_ITEM[i].VLTYP + "/" + TO_ITEM[i].VLPLA + "/"+ TO_ITEM[i].VLENR;
                   record.lblConfirmQty = TO_ITEM[i].CONF_QTY;
                   record.lblCaseNumber = TO_ITEM[i].VLENR;
                   record.lblPickStatus = TO_ITEM[i].PICK;
                   record.lblQtyDisplay = "Qty: " +TO_ITEM[i].VSOLA+" Conf: "+TO_ITEM[i].CONF_QTY;
                   
                   if(TO_ITEM[i].PICK==="C")
                   {
                   		record.lblStrip = {"skin":"sknLblStatusGreen"};    
                   }
                   else if(TO_ITEM[i].PICK==="P" && TO_ITEM[i].CONF_QTY===0)
                   {
                       record.lblStrip = {"skin":"sknLblStatusRed"}; 
                   }
                  else if(TO_ITEM[i].CONF_QTY=== TO_ITEM[i].VSOLA)
                   {
                      record.lblStrip = {"skin":"sknLblStatusGreen"}; 
                    }
                   else 
                   {
                        record.lblStrip = {"skin":"sknLblStatusYellow"};
                   }
                  
                  
                  /* Commented out due to empty strings returned
                  //Retrieve image base64 string from the field values below
                  //and stich it up
                  var base64Value = TO_ITEM[i].ZZLONG_TEXT + 
                                    TO_ITEM[i].ZZLONG_TEXT2 + 
                                    TO_ITEM[i].ZZLONG_TEXT3 + 
                                    TO_ITEM[i].ZZLONG_TEXT4 + 
                                    TO_ITEM[i].ZZLONG_TEXT5;
                  
                  //Trim the string
                  base64Value.trim();
                  
                  if(base64Value.length>0)
                  {
                    record.imgItemDrawing = {"base64":base64Value};
                  } */ 
                    
                    
                   data.push(record);
                  }
              
            }
            
            
            
            //Get images from cache. Fetch from SAP if not exist in cache
            if(data!== undefined)
            {
              printLog("Starting binary content retrieving");
              var x =0;
              controllerScope = this;
              
              //Recursive function
              var loopArray = function(data){
                printLog("Inside loop array index:"+x);
                var drawingID = data[x].lblDrawing;
                
                printLog("Retrieving image for drawing:"+drawingID);
                var cacheBinary = getImageCache(drawingID);
                //printLog("ImageCache length for "+drawingID+":"+cacheBinary.length);
                if(cacheBinary!==undefined && cacheBinary!==null && cacheBinary.length>0)
                  {
                    printLog("ImageCache found");
                     data[x].imgItemDrawing = {"base64":cacheBinary};
                  
                       x++;
                  
                       
                       if(x<data.length)
                         {
                           loopArray(data);
                         }
                       else
                       {
                         controllerScope.view.segItems.addAll(data);
                         dismissLoadingScreen();
                       }
                  }
                else
                  {
                    printLog("ImageCache not found. Attempt to get from SAP");
                    
                getBinaryContent(drawingID, 
                   //Success callback
                  function(res){ 
                       printLog("Successfull retrival for index:"+x);
                       data[x].imgItemDrawing = {"base64":res};
                      
                       //Save graphic to cache
                       var cacheKey = data[x].lblDrawing;
                       setImageCache(cacheKey, res);
                  
                       x++;
                  
                       
                       if(x<data.length)
                         {
                           loopArray(data);
                         }
                       else
                       {
                         controllerScope.view.segItems.addAll(data);
                         dismissLoadingScreen();
                       }
                	 }, 
                       //Error callback          
                       function(res){ 
                       printLog("Error callback for index:"+x);
                       data[x].imgItemDrawing = {"base64":""};
                      
                  
                       x++;
                  
                       
                       if(x<data.length)
                         {
                           loopArray(data);
                         }
                       else
                       {
                         controllerScope.view.segItems.addAll(data);
                         dismissLoadingScreen();
                       }
                	 });
                  }
              };
              
              loopArray(data);
              
            }
            
            
           
          
          }
          
          
        }
  },
  
  onRowClick:function()
  {
    
    var selectedRow = this.view.segItems.selectedRowItems; 
    activeTOItem = {};
    activeTOItem.TAPOS = selectedRow[0].lblItemNumber;
    activeTOItem.MATNR = selectedRow[0].lblMaterialNo;
    activeTOItem.VSOLA = selectedRow[0].lblQty;
    activeTOItem.MEINS = selectedRow[0].lblUOM;
    activeTOItem.MAKTX = selectedRow[0].lblMaterial;
    activeTOItem.VLTYP = selectedRow[0].lblStorageType;
    activeTOItem.VLPLA = selectedRow[0].lblStorageUnit;
    activeTOItem.VLENR = selectedRow[0].lblCaseNumber;
    activeTOItem.BIN   = selectedRow[0].lblBinInfo;
    activeTOItem.IMAGE = selectedRow[0].imgItemDrawing.base64;
    activeTOItem.ZEINR = selectedRow[0].lblDrawing;
    activeTOItem.CONF_QTY = selectedRow[0].lblConfirmQty;
   
   
    //activeTONumber = selectedRow[0].lblTransferOrderNumber;
    
    navigateToForm("frmConfirmPick");
  },
  
 });