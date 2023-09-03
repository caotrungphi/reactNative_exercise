import {combineReducers} from 'redux'
import counterReducers from './counterReducers';
import cauChaoReducer from './cauChaoReducer';
import Nguoi_dung_Reducers from './Nguoi_dung_Reducers';

const allReducers = combineReducers({
    // state
    counterReducers,
    cauChaoReducer,
    Nguoi_dung_Reducers
    
})

export default allReducers;