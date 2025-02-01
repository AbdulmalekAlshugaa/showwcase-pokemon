import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../auth/src/authReducer';
import pokemonsReducer from '../../pokemons/src/pokemonsSlice';
import { pokemonApi, pokemonDetailsApi, pokemonSpeciesApi } from '../../pokemons/hooks';
const GlobalReducer = combineReducers({
    auth: authReducer,
    pokemons: pokemonsReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer, // ✅ Add RTK Query Reducer
    [pokemonDetailsApi.reducerPath]: pokemonDetailsApi.reducer, // ✅ Add RTK Query Reducer
    [pokemonSpeciesApi.reducerPath]: pokemonSpeciesApi.reducer, // ✅ Add RTK Query Reducer
});

export default GlobalReducer;
