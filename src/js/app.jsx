import React from 'react';
import CityInput from './components/CityInput/inputs';
import WeatherInfo from './components/WeatherInfo/weatherInfo';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-left'>Weather Application</h1>
          <p>Always know if you'll need an umbrella!</p>
        </div>
        <CityInput />
        <WeatherInfo />
      </div>
    );
  }
}