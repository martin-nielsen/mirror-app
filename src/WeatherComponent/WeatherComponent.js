import React, { Component } from 'react';
import getCurrentWeather from '../DataServices/WeatherService'

class WeatherComponent extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    getCurrentWeather();
    console.log('Success!')
  }
  render() {
    return (
      <div>
        <h3> Looking cloudy today </h3>
        <i className="fa fa-cloud"></i>
        <div className='button__container'>
          <button className='button' onClick={this.handleClick}>Click Me</button>
        </div>
      </div>
    );
  }
}

export default WeatherComponent;