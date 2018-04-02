import React, { Component } from 'react';
import getWeatherForecasts from '../DataServices/WeatherService';
import './WeatherComponent.css'

class WeatherComponent extends Component {
  constructor() {
    super()
    let currentLocationForecasts = getWeatherForecasts();
    this.draw(currentLocationForecasts.forecastMoments[0]);
  }

  render() {
    return (
      <div>
        {/*<div className='button__container'>
          <button className='button' onClick={this.handleClick}>Click Me</button>
        </div>*/}
        <h3> </h3>
        <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
        </div>
      </div>
    );
  }

  draw(forecast) {
    console.log(forecast);
  }
}

export default WeatherComponent;