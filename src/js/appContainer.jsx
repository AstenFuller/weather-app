import { connect } from 'react-redux';
import App from './app';

    function mapStoreToProps(store) {
        return {
            city: store.city,
            
        };
    }
    
          export default connect(mapStoreToProps)(App);