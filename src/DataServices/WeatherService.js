var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat={58.402128}&lon={15.60235}&APPID={d5522d73c5c76fd651027ccd9f7ee924}", false);
xhr.send();
var response = JSON.parse(xhr.responseText);
console.log(response);


//Latitude: 58.402128 | Longitude: 15.60235
//api.openweathermap.org/data/2.5/weather?lat=58.402128&lon=15.60235
//api-key: d5522d73c5c76fd651027ccd9f7ee924
//http://api.openweathermap.org/data/2.5/forecast?id=2694762&APPID=d5522d73c5c76fd651027ccd9f7ee924
//http://api.openweathermap.org/data/2.5/weather?lat=58.402128&lon=15.60235&APPID=d5522d73c5c76fd651027ccd9f7ee924