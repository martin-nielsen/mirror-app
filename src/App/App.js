import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import WeatherComponent from '../WeatherComponent/WeatherComponent'
import TimeComponent from '../TimeComponent/TimeComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is the header</h1>
        </header>
        <WeatherComponent />
        <TimeComponent />
      </div>
    );
  }
}

export default App;