import React, { Component } from 'react';
import './App.css';
import {getWeatherData, getLocationCoords} from './api.js'

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
              <h3 className="temperature">
                {this.state.currentTemperature} &#176;
                {this.state.currentUnit}
                <span className="super-small">/
                {this.state.availableUnit}
                </span>
              </h3>
              <h2>{this.state.currentWeather}</h2>
            </div>
          </div>
      );
    }
    fetchWeather(units) {
      getLocationCoords().then(
        (coords) => {
          // Got location data, get weather now
          getWeatherData(units, coords).then(
            (weatherData) => {
              // Got weather data, proceed to update state using setState()
              this.setState({
                city: weatherData.body.name,
                country: weatherData.body.sys.country,
                currentTemperature: weatherData.body.main.temp,
                currentWeather: weatherData.body.weather[0].main,
                currentUnit: units,
                availableUnit: units === 'C' ? 'F' : 'C'
              });
            }, (error) => {
              // Could not get weather data.
              console.error(error);
            }
          );
        }, (error) => {
          // Could not get location data.
          console.error(error);
        }
      );
    }https://www.gorkahernandez.com/blog/weather-app-the-react-way/
}

export default App;
