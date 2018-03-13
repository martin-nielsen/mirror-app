import React, { Component } from 'react';
import getCurrentWeather from '../DataServices/WeatherService';
import './WeatherComponent.css'

class WeatherComponent extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let currentForecast = getCurrentWeather();
    console.log(currentForecast);
    // draw(currentForecast[0]);
  }

  render() {
    return (
      <div>
        <h3> Looking cloudy todays </h3>
        <div className="icon sun-shower">
          <div class="cloud"></div>
          <div class="sun">
            <div class="rays"></div>
          </div>
          <div class="rain"></div>
        </div>
        <div className='button__container'>
          <button className='button' onClick={this.handleClick}>Click Me</button>
        </div>
      </div>
    );
  }
}

export default WeatherComponent;