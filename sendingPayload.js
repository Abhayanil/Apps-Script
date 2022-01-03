//Sending payload from sheet
function functionName() {
 var url = "Enter the url"; //Specify the url/Webhook url
  var data = {
   'value': 'enter the value to be passed',  //Specify the value to be passed
 };
  var option = {
   "method" : "post",                       //specify the method to be used here it is post method
   'contentType': 'application/json',
   'payload': JSON.stringify(data)
 };
  UrlFetchApp.fetch(url, option);
}
