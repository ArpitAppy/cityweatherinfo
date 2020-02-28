import { combineReducers } from 'redux'; 
import { city } from './city.reducer';

const rootReducer = combineReducers({
    city
});

export default rootReducer;