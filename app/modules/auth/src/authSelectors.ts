import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../main/src/configureStore';

const pokemonMainSelector = (state: RootState) => state.auth;

export const isUserLoggedIn = createSelector(pokemonMainSelector, state => state.isAuthenticated);
