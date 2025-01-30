import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../auth/src/authReducer';

const GlobalReducer = combineReducers({
    auth: authReducer,
});

export default GlobalReducer;
