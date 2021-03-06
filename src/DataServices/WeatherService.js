export class Forecast {
  constructor() {
    this.forecastMoments = [];
  };

  addForecastMoment(forecastMoment) {
    this.forecastMoments.push(forecastMoment);
  };
}

export class ForecastMoment {
  constructor(time,
    temp_high,
    temp_low,
    humidity,
    windDirection,
    windStrength) {
      this.time = time;
      this.temp_high = temp_high;
      this.temp_low = temp_low;
      this.humidity = humidity;
      this.windDirection = windDirection;
      this.windStrength = windStrength;
  }
}

function kelvinToCelsius(kelvin) {
  let celsius = kelvin - 273.15;
  return celsius;
}

function createForecast(json) {
  let forecast = new Forecast();
  for (var element of json) {
    var forecastMoment = new ForecastMoment(
      element.main.dt_txt,
      kelvinToCelsius(element.main.temp_max),
      kelvinToCelsius(element.main.temp_min),
      element.main.humidity,
      element.wind.deg,
      element.wind.speed
    );
    forecast.addForecastMoment(forecastMoment)
  }
  return forecast;
}


function getWeatherForecasts() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=2694762&APPID=d5522d73c5c76fd651027ccd9f7ee924", false);
  xhr.send();
  var response = JSON.parse(xhr.responseText);
  //Handle the response
  return createForecast(response.list);
}
// exports the above method
export default getWeatherForecasts;

//Latitude: 58.402128 | Longitude: 15.60235
//api.openweathermap.org/data/2.5/weather?lat=58.402128&lon=15.60235
//api-key: d5522d73c5c76fd651027ccd9f7ee924
//http://api.openweathermap.org/data/2.5/forecast?id=2694762&APPID=d5522d73c5c76fd651027ccd9f7ee924
//http://api.openweathermap.org/data/2.5/weather?lat=58.402128&lon=15.60235&APPID=d5522d73c5c76fd651027ccd9f7ee924