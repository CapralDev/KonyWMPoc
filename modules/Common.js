//Type your code here

function navigateToForm(formName)
{
  printLog("Navigate to form:"+formName);
  
  var ntf = new kony.mvc.Navigation(formName);
  ntf.navigate();
}

function displaySAPDate(sapDateInput)
{ 
  //sapDate has the format YYYYMMDD
  printLog("displaySAPDate:BEFORE:"+sapDateInput);
  var sapDate = "";
  sapDate = sapDateInput.toString();
  
  if(sapDate==="00000000")
  {
      return "";
  }
 
  var output = sapDate.substring(6,8) + "/" +
               sapDate.substring(4,6) + "/" +
               sapDate.substring(0,4);
  
  printLog("displaySAPDate:AFTER:"+output);
  
  return output;
}


function displayLoadingScreen(message)
{
  kony.application.showLoadingScreen(null, message, constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {});
	
}

function dismissLoadingScreen()
{
  kony.application.dismissLoadingScreen();
}

function printLog(message)
{
  kony.print("XXXXX:"+message);
}