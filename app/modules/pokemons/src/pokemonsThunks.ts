import { AppDispatch } from '../../main/src/configureStore';
import { pokeapi } from '../../main/src/services/api';
import castPokemonDataInEspecialFormate from '../../main/src/utils/getPokemonData';
import getPokemonIdByUrl from '../../main/src/utils/getPokemonIdByUrl';
import { getPokemonFailure, getPokemonRequest, getPokemonSuccess } from './pokemonsSlice';

export const getPokemonsThunk = (offset: number, limit: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(getPokemonRequest());

        try {
            // Pass offset and limit dynamically when calling the API
            const pokemonsApiResponse = await pokeapi.pokemons(offset, limit);

            if (pokemonsApiResponse.kind !== 'ok') {
                return dispatch(getPokemonFailure(pokemonsApiResponse.kind));
            }

            const { results, previous, next } = pokemonsApiResponse.data;

            const pokemonsList = await Promise.all(
                results.map(async pokemon => {
                    try {
                        const pokemonId = getPokemonIdByUrl(pokemon.url);

                        const [pokemonData, pokemonSpeciesData] = await Promise.all([
                            pokeapi.pokemonById(pokemonId),
                            pokeapi.pokemonSpecies(pokemonId),
                        ]);

                        return castPokemonDataInEspecialFormate(
                            pokemonData.kind === 'ok' ? pokemonData.data : null,
                            pokemonSpeciesData.kind === 'ok' ? pokemonSpeciesData.data : null,
                        );
                    } catch (error) {
                        console.error(`Failed to fetch Pokémon with URL: ${pokemon.url}`, error);
                        return null;
                    }
                }),
            );

            const finalPokemonsListWithNextAndCount = {
                results: pokemonsList.filter(Boolean),
                next,
                previous,
            };

            dispatch(getPokemonSuccess({ pokemons: finalPokemonsListWithNextAndCount }));
        } catch (error) {
            dispatch(getPokemonFailure('An unexpected error occurred'));
        }
    };
};
