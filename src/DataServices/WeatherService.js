export class Forecast {
  constructor() {
    let forecastMoments = [];
  };

  addForecastMoment(forecastMoment) {
    this.forecastMoments.push(forecastMoment);
  };
}

export class ForecastMoment {
  constructor(
    time,
    temp_high,
    temp_low,
    direction,
    strength) {
  }
}

function kelvinToCelsius(kelvin) {
  let celsius = kelvin - 273.15;
  return celsius;
}

function getCurrentWeather() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=2694762&APPID=d5522d73c5c76fd651027ccd9f7ee924", false);
  xhr.send();
  var response = JSON.parse(xhr.responseText);
  //Handle the response
  let forecast = new Forecast();
  for (let element of response.list) {
    let humidity = element.main.humidity
    let forecastMoment = new ForecastMoment(
      element.main.dt_txt,
      kelvinToCelsius(element.main.temp_max),
      kelvinToCelsius(element.main.temp_min),
      element.main.humidity
    );
    forecast.addForecastMoment(forecastMoment)
  }
}
// exports the above method
export default getCurrentWeather;

//Latitude: 58.402128 | Longitude: 15.60235
//api.openweathermap.org/data/2.5/weather?lat=58.402128&lon=15.60235
//api-key: d5522d73c5c76fd651027ccd9f7ee924
//http://api.openweathermap.org/data/2.5/forecast?id=2694762&APPID=d5522d73c5c76fd651027ccd9f7ee924
//http://api.openweathermap.org/data/2.5/weather?lat=58.402128&lon=15.60235&APPID=d5522d73c5c76fd651027ccd9f7ee924