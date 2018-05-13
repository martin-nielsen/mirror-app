import React, { Component } from 'react';
import getWeatherForecasts from '../DataServices/WeatherService';
import './WeatherComponent.css'

class WeatherComponent extends Component {
  constructor() {
    super()
    let currentLocationForecasts = getWeatherForecasts();
    Draw(currentLocationForecasts.forecastMoments[0].humidity);
  }
  render() {
    return (
      <div>
        <Draw />
      </div>
    );
  }
}

function Draw(forecast) {
  console.log(forecast);
  let test = forecast+"";
  return (
    <div>
      <h1>{test}</h1>
      <div className="icon sun-shower">
        <div className="cloud"></div>
        <div className="sun">
          <div className="rays"></div>
        </div>
        <div className="rain"></div>
      </div>

      <div>
        <h1>Humidity: </h1>
      </div>
    </div>
  );
}

/*function Humidity(humidity) {
  return (
    <div>
      <h3>Current humidity</h3>
      <div>{humidity}</div>
    </div>
  );
}

function Temp(tempHigh, tempLow) {

}

function Wind(windSpeed, windDirection) {

}

function ForecastTime(forecastTime) {

}*/

export default WeatherComponent;