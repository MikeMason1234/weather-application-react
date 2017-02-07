import React, { Component } from 'react';
import superagent from 'superagent'
import jsonp from 'superagent-jsonp'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // A call to the class we are extending: React.Component
    this.state = {
      city: 'Loading...',
      country: 'Loading...',
      currentWeather: 'Loading...',
      currentTemperature: 0,
      currentUnit: 'C',
      availableUnit: 'F'
    }
  }

  render() {
    return (
      <div className="main-wrapper overlay">
        <div className="forecast-box">
          <h1 className="city-name">{this.state.city}</h1>
          <h2 className="country">{this.state.country}</h2>
          <h3 className="temperature">{this.state.currentTemperature} &#176;{this.state.currentUnit} <span className="super-small">/ {this.state.availableUnit}</span></h3>
          <h2>{this.state.currentWeather}</h2>
        </div>
      </div>
    );
  }
}

export default App;
