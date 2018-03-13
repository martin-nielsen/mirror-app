import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import WeatherComponent from '../WeatherComponent/WeatherComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Smart Mirror</h1>
        </header>
        <TimeComponent />
        <WeatherComponent />
      </div>
    );
  }
}

function TimeComponent() {
  return (
    <div >
      <header>
        <h1>{"Time: " + new Date()}</h1>
      </header>
    </div>
  )
}

export default App;