import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../main/src/configureStore';
import getReadyPokemonData from '../../main/src/utils/getPokemonData';

// we will be running tests for all these selectors to make sure they return the correct data
const classAuthSelector = (state: RootState) => state.pokemonDetails;

export const pokemonDetailsLoadingSelector = createSelector(classAuthSelector, state => state.loading);
export const pokemonDetailsErrorSelector = createSelector(classAuthSelector, state => state.error);
export const pokemonDetailsSuccessSelector = createSelector(classAuthSelector, state => state.success);
const pokemonInfoSelector = createSelector(classAuthSelector, state => (state.loading ? null : state.pokemonInfo));
const pokemonSpeciesSelector = createSelector(classAuthSelector, state =>
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
        return readyData;
    },
);
