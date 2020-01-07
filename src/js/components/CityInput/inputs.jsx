import React from 'react';

export default class CityInput extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col preset-buttons'>
                        <button className='city-btn' value="Tokyo">San Diego</button>
                        <button className='city-btn'>New York</button>
                        <button className='city-btn'>Washington D.C.</button>
                        <button className='city-btn'>Tokyo</button>
                        <button className='city-btn'>London</button>
                    </div>
                </div>
                <div className='select-div'>
                    <input className='select-city'></input>
                    <button className='submit-city'>Go!</button>
                </div>
            </div>
        );
    }
}