import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../auth/src/authReducer';
import pokemonDetailsReducer from '../../pokemons/src/pokemonsDetailsSlice';
import { pokemonApi } from '../../pokemons/hooks';
const GlobalReducer = combineReducers({
    auth: authReducer,
    pokemonDetails: pokemonDetailsReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer, // ✅ Add RTK Query Reducer
});

export default GlobalReducer;
