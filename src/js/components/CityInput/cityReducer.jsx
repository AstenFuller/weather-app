const defaultState = {
    city:{
        main: '',
        temp: '',
        pressure: '',
        humidity: '',
        temp_min: '',
        temp_max: '',
        wind: '',
        speed: '',
        coord: '',
        lon: '',
        lat: '',
        name: '',
    },
    input: '',
    history: [],
    
}

export default function CityReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_CITY_INFO': {
            return {
                ...state,
                city: payload.city
            }
        }

        case 'UPDATE_INPUT': {
            return{
                ...state,
                input: payload.input
            }
        }

        case 'SUBMIT_CITY': {
            return {
                ...state,
                city: payload.city,
                input: '',
            }
        }

        case 'UPDATE_HISTORY': {
            const { city, time, hour } = action.payload;
            return {
                ...state,
                history: [
                    ...state.history,
                    { city, time, hour }
                ]
            }
        }

        default: {
            return state;
        }
    }
}