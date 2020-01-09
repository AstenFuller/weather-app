import { connect } from 'react-redux';
import CityInput from './CityInput';

    function mapStoreToProps(store) {
        return {
            city: store.city,
            
        };
    }
    
          export default connect(mapStoreToProps)(CityInput);