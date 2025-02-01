
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../main/src/configureStore";

const classAuthSelector = (state: RootState) => state.pokemons;

export const selectPokemonsLoading = createSelector(classAuthSelector, (state) => state.loading);
export const selectPokemonsError = createSelector(classAuthSelector, (state) => state.error);
export const selectPokemonsSuccess = createSelector(classAuthSelector, (state) => state.success);
export const selectPokemonsData = createSelector(classAuthSelector, (state) => state.data.results);
export const selectPokemonsNext = createSelector(classAuthSelector, (state) => state.data.next);
export const selectPokemonsPrevious = createSelector(classAuthSelector, (state) => state.data.previous);
