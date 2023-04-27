import { combineReducers } from 'redux';
import profileReducer from './profileReducer';

const allReducers = combineReducers({
    profile: profileReducer
});

export default allReducers;