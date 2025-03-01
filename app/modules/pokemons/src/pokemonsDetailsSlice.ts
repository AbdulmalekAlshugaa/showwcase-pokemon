/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
    loading: boolean;
    pokemonInfo: pokemon.PokemonResponseById | null;
    pokemonSpecies: pokemon.PokemonSpecie | null;

    error: string | null;
    success: boolean;
}

const initialState: PokemonState = {
    loading: false,
    pokemonInfo: null,
    pokemonSpecies: null,
    error: null,
    success: false,
};

const pokemonStateSlice = createSlice({
    name: 'POKEMONDETAILS',
    initialState,
    reducers: {
        // Define your synchronous reducers here
        getPokemonDetailsRequest(state) {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        getPokemonDetailsSuccess(state, action: PayloadAction<{ pokemonInfo: any; pokemonSpecies: any }>) {
            state.loading = false;
            state.pokemonInfo = action.payload.pokemonInfo;
            state.pokemonSpecies = action.payload.pokemonSpecies;
            state.success = true;
        },
        getPokemonDetailsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },

        // Define your asynchronous reducers here

        cleanUp(state) {
            state.loading = false;
            state.error = null;
            state.success = false;
        },
    },
});

// Export action creators
export const { getPokemonDetailsRequest, getPokemonDetailsSuccess, getPokemonDetailsFailure, cleanUp } =
    pokemonStateSlice.actions;

export default pokemonStateSlice.reducer;
