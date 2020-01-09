export function updateCityInfo(city) {
    return {
         type: 'UPDATE_CITY_INFO',
         payload: { city }
    };
}

export function updateGetCityInput(input) {
    return {
        type: 'UPDATE_INPUT',
        payload: { input }
    }
}

export function submitCity(city) {
    return {
        type: 'SUBMIT_CITY',
        payload: { city }
    }
}

export function addToList(city) {
    return {
        type: 'ADD_TO_LIST',
        payload: { city }
    }
}

export function updateHistory(city, time, hour){
    return {
        type: 'UPDATE_HISTORY',
        payload: { city, time, hour }
    }
}
