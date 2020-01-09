import React from 'react';

export default class WeatherInfo extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        const { city } = this.props;
        return (
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='panel panel-info border-info'>
                            <div className='panel-header'>City Information</div>
                            <div className='panel-content city-display'>
                                <h4>{city.city.name}</h4>
                                <p>Lat/Long: {city.city.coord.lon}, {city.city.coord.lat}</p>
                            </div>
                            <div className='grid'>
                                <div className='gridRow'>
                                    <p className='info-description'>Temperature (F)</p>
                                    <p className='info-data'>{city.city.main.temp}</p>
                                </div>
                                <div className='gridRow'>
                                    <p className='info-description'>Pressure</p>
                                    <p className='info-data'>{city.city.main.pressure}</p>
                                </div>
                                <div className='gridRow'>
                                    <p className='info-description'>Humidity</p>
                                    <p className='info-data'>{city.city.main.humidity}</p>
                                </div>
                                <div className='gridRow'>
                                    <p className='info-description'>Lowest Temp (F)</p>
                                    <p className='info-data'>{city.city.main.temp_min}</p>
                                </div>
                                <div className='gridRow'>
                                    <p className='info-description'>Highest Temp (F)</p>
                                    <p className='info-data'>{city.city.main.temp_max}</p>
                                </div>
                                <div className='gridRow'>
                                    <p className='info-description'>Wind Speed</p>
                                    <p className='info-data'>{city.city.wind.speed}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='panel panel-info border-info'>
                            <div className='panel-header'>Search History</div>
                            <div className='search-history'>
                                {
                                    city.history.map( history => (
                                <div className='search-item grid'>
                                    <p className='search-item'>{history.city}</p>
                                    <p className='search-item one'>{history.time}</p>
                                    <p className='search-item two'>{history.hour}</p>
                                </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}