import { AppDispatch } from '../../main/src/configureStore';
import { pokeapi } from '../../main/src/services/api';
import castPokemonDataInEspecialFormate from '../../main/src/utils/getPokemonData';
import getPokemonIdByUrl from '../../main/src/utils/getPokemonIdByUrl';
import { getPokemonFailure, getPokemonRequest, getPokemonSuccess } from './pokemonsSlice';

export const getPokemonsThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(getPokemonRequest());

        try {
            const pokemonsApiResponse = await pokeapi.pokemons(0, 20);

            if (pokemonsApiResponse.kind !== 'ok') {
                return dispatch(getPokemonFailure(pokemonsApiResponse.kind));
            }

            const { results } = pokemonsApiResponse.data;

            const finalPokemons = await Promise.all(
                results.map(async pokemon => {
                    try {
                        const pokemonId = getPokemonIdByUrl(pokemon.url);

                        const [pokemonData, pokemonSpeciesData] = await Promise.all([
                            pokeapi.pokemonById(pokemonId),
                            pokeapi.pokemonSpecies(pokemonId),
                        ]);

                        // We have castPokemonDataInEspecialFormate function in utils folder which will format the data
                        // We put it here rather than and not during getting the data from store due to SerializableStateInvariantMiddleware error
                        // This is work for now but we need to find a better solution such as having multiple reducers/slices
                        // Leaving this so for discussion during the review process

                        return castPokemonDataInEspecialFormate(
                            pokemonData.kind === 'ok' ? pokemonData.data : null,
                            pokemonSpeciesData.kind === 'ok' ? pokemonSpeciesData.data : null,
                        );
                    } catch (error) {
                        console.error(`Failed to fetch Pokémon with URL: ${pokemon.url}`, error);
                        return null; // Handle errors gracefully to avoid breaking Promise.all
                    }
                }),
            );
            console.log(finalPokemons.filter(Boolean)[0].image);
            dispatch(getPokemonSuccess({ pokemons: finalPokemons.filter(Boolean) }));
        } catch (error) {
            dispatch(getPokemonFailure('An unexpected error occurred'));
        }
    };
};
