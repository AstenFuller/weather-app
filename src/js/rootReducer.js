import { combineReducers } from 'redux';
import cityReducer from './components/CityInput/cityReducer';

const rootReducer = combineReducers({
    city: cityReducer,
});

export default rootReducer;
