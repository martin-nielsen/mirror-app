import React, { Component } from 'react';
import './TimeComponent.css'

class TimeComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>{"Time: " + new Date().toLocaleTimeString()}</h1>
          <h1>{"Date: " + new Date().toLocaleDateString()}</h1>
        </header>
      </div>
    );
  }
}

export default TimeComponent;