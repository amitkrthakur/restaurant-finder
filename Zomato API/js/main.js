//Zomato API-Categories search js-codes to automate HTML creation using handlebars.js


var httpreq = "categories";
var UserRequest = {
  "async": true,
  "crossDomain": true,
  "url": "https://developers.zomato.com/api/v2.1/"+httpreq+"",
  "method": "GET",
  "headers": {
  "user-key": "3c99a91c83aaebabc4ee9ca71bf6dba4",
  }
}

$.ajax(UserRequest).done(function (response) {
    data = response;
    console.log(data);
    createHTML();

})


function createHTML(){
var rawTemplate = document.getElementById("template").innerHTML;
var compiledTemplate = Handlebars.compile(rawTemplate);
var generatedHTML = compiledTemplate(data);
    
var writeData = document.getElementById("write-data");
writeData.innerHTML = generatedHTML;
}
