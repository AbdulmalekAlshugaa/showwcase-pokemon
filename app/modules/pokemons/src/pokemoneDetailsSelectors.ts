import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../main/src/configureStore';
import getReadyPokemonData from '../../main/src/utils/getPokemonData';

// we will be running tests for all these selectors to make sure they return the correct data
const pokemonMainSelector = (state: RootState) => state.pokemonDetails;

export const pokemonDetailsLoadingSelector = createSelector(pokemonMainSelector, state => state.loading);
export const pokemonDetailsErrorSelector = createSelector(pokemonMainSelector, state => state.error);
export const pokemonDetailsSuccessSelector = createSelector(pokemonMainSelector, state => state.success);
export const pokemonInfoSelector = createSelector(pokemonMainSelector, state => (state.loading ? null : state.pokemonInfo));
export const pokemonSpeciesSelector = createSelector(pokemonMainSelector, state =>
    state.loading ? null : state.pokemonSpecies,
);

export const pokemonDetailsSelector = createSelector(
    pokemonInfoSelector,
    pokemonSpeciesSelector,
    (pokemonInfo, pokemonSpecies) => {
        if (!pokemonInfo || !pokemonSpecies) {
            return null;
        }
        const readyData = getReadyPokemonData(pokemonInfo, pokemonSpecies);
        console.log(readyData);
        return readyData;
    },
);
