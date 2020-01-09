import React from 'react';
import CityInput from './components/CityInput';
import WeatherInfo from './components/WeatherInfo';


export default class App extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-left'>Weather Application</h1>
          <p>Always know if you'll need an umbrella!</p>
        </div>
        <CityInput />
        {this.props.city.showInfo && <WeatherInfo />}
      </div>
    );
  }
}