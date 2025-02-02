import { AppDispatch } from '../../main/src/configureStore';
import { pokeapi } from '../../main/src/services/api';
import { getPokemonDetailsFailure, getPokemonDetailsRequest, getPokemonDetailsSuccess } from './pokemonsDetailsSlice';

export const pokemoneDetailsThunk = (pokemonId: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(getPokemonDetailsRequest());

        try {
            // Make the API request
            const [pokemonDetail, pokemonSpecies] = await Promise.all([
                pokeapi.pokemonById(pokemonId),
                pokeapi.pokemonSpecies(pokemonId),
            ]);

            if (pokemonDetail.kind === 'ok' && pokemonSpecies.kind === 'ok') {
                dispatch(
                    getPokemonDetailsSuccess({ pokemonInfo: pokemonDetail.data, pokemonSpecies: pokemonSpecies.data }),
                );
            } else {
                dispatch(getPokemonDetailsFailure('An error occurred'));
            }
        } catch (error) {
            // Handle network or unexpected errors
            dispatch(getPokemonDetailsFailure('An error occurred'));
        }
    };
};
