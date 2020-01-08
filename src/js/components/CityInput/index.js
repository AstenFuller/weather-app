import { connect } from 'react-redux';
import CityInput from './CityInput';

    // This function takes the store and returns an object
    // that's passed to the props of the component.
    function mapStoreToProps(store) {
        return {
            city: store.city,
            
        };
    }
    
          export default connect(mapStoreToProps)(CityInput);