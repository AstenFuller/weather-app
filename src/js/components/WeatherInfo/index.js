import { connect } from 'react-redux';
import WeatherInfo from './weatherInfo';

    function mapStoreToProps(store) {
        return {
            city: store.city,
            
        };
    }
    
          export default connect(mapStoreToProps)(WeatherInfo);