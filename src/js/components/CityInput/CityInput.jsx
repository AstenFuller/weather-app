import React from 'react';
import {
    updateCityInfo, updateGetCityInput, submitCity, updateHistory
}
    from './cityAction';

export default class CityInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGetCityInput = this.handleGetCityInput.bind(this);
        this.handleGetCityInfo = this.handleGetCityInfo.bind(this);
    }

    handleGetCityInfo(e) {
        const cityName = e.target.value;
        const { dispatch } = this.props;
        fetch(`/search/${cityName}`)
            .then(response => response.json())
            .then(data => dispatch(updateCityInfo(data)))
    }

    handleGetCityInput(e) {
        const { value } = e.target;
        const { dispatch } = this.props;
        dispatch(updateGetCityInput(value));
    }

    handleSubmit() {
        const { city, dispatch } = this.props;

        fetch(`/search/${city.input}`)
            .then(response => response.json())
            .then(data => dispatch(submitCity(data)))
    }

    render() {
        const { city } = this.props;
        return (
            <div>
                <div className='row'>
                    <div className='col preset-buttons'>
                        <button
                            className='city-btn'
                            value="San Diego"
                            onClick={this.handleGetCityInfo}>San Diego</button>
                        <button
                            className='city-btn'
                            value="New York"
                            onClick={this.handleGetCityInfo}>New York</button>
                        <button
                            className='city-btn'
                            value="Washington D.C"
                            onClick={this.handleGetCityInfo}>Washington D.C</button>
                        <button
                            className='city-btn'
                            value="Tokyo"
                            onClick={this.handleGetCityInfo}>Tokyo</button>
                        <button
                            className='city-btn'
                            value="London"
                            onClick={this.handleGetCityInfo}>London</button>
                    </div>
                </div>
                <div className='select-div'>
                    <input
                        className='select-city'
                        placeholder="enter a city"
                        value={city.input}
                        onChange={this.handleGetCityInput}
                    />
                    <button
                        className='submit-city'
                        onClick={this.handleSubmit}>Go!</button>
                </div>
            </div>
        );
    }
}