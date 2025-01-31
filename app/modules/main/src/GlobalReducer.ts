import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../auth/src/authReducer';
import pokemonsReducer from '../../pokemons/src/pokemonsSlice';

const GlobalReducer = combineReducers({
    auth: authReducer,
    pokemons: pokemonsReducer,

});

export default GlobalReducer;
