import React from 'react';

export default class WeatherInfo extends React.Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='panel panel-info border-info'>
                            <div className='panel-header'>City Information</div>
                            <div className='panel-content city-display'>
                                <h4>Tokyo</h4>
                                <p>Lat/Long: 35.69, 139.69</p>
                            </div>
                            <div className='grid'>
                                <div className='gridRow'>
                                    <p className='info-description'>Temperature (F)</p>
                                    <p className='info-data'>65.62F</p>
                                </div>
                                <div className='gridRow'>
                                    <p className='info-description'>Pressure</p>
                                    <p className='info-data'>997</p>
                                </div>
                                <div className='gridRow'>
                                    <p className='info-description'>Humidity</p>
                                    <p className='info-data'>39%</p>
                                </div>
                                <div className='gridRow'>
                                    <p className='info-description'>Lowest Temp (F)</p>
                                    <p className='info-data'>62.01F</p>
                                </div>
                                <div className='gridRow'>
                                    <p className='info-description'>Highest Temp (F)</p>
                                    <p className='info-data'>71.01F</p>
                                </div>
                                <div className='gridRow'>
                                    <p className='info-description'>Wind Speed</p>
                                    <p className='info-data'>24.16mph</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='panel panel-info border-info'>
                            <div className='panel-header'>Search History</div>
                            <div className='search-history'>
                                <div className='search-item grid'>
                                    <p className='search-item'>San Diego</p>
                                    <p className='search-item one'>08/14/2016</p>
                                    <p className='search-item two'>15:34:46</p>
                                </div>
                                <div className='search-item grid'>
                                    <p className='search-item'>New York</p>
                                    <p className='search-item one'>08/14/2016</p>
                                    <p className='search-item two'>15:34:46</p>
                                </div>
                                <div className='search-item grid'>
                                    <p className='search-item'>Washington D.C.</p>
                                    <p className='search-item one'>08/14/2016</p>
                                    <p className='search-item two'>15:34:46</p>
                                </div>
                                <div className='search-item grid'>
                                    <p className='search-item'>Tokyo</p>
                                    <p className='search-item one'>08/14/2016</p>
                                    <p className='search-item two'>15:34:46</p>
                                </div>
                                <div className='search-item grid'>
                                    <p className='search-item'>London</p>
                                    <p className='search-item one'>08/14/2016</p>
                                    <p className='search-item two'>15:34:46</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}