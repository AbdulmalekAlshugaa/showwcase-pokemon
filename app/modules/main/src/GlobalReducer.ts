import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from '../../auth/src/authReducer';

const GlobalReducer = combineReducers({
    // Add your reducers here
    counter: counterReducer,
    auth: authReducer,
});

export default GlobalReducer;
