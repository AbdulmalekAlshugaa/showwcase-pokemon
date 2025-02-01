import { useState, useCallback, useEffect } from 'react';
import { useGetPokemonsQuery } from './useGetPokemonsQuery';
import getPokemonIdByUrl from '../../main/src/utils/getPokemonIdByUrl';
import castPokemonDataInEspecialFormate from '../../main/src/utils/getPokemonData';
import { pokeapi } from '../../main/src/services/api';
import useDebounce from '../../main/hooks/useDebounce';

const useGetPaginatedPokemons = () => {
    const [offset, setOffset] = useState(0);
    const limit = 20;
    const [allPokemons, setAllPokemons] = useState<any[]>([]);

    const { data, isFetching, isSuccess, isLoading } = useGetPokemonsQuery({ offset, limit });

    useEffect(() => {
        if (isSuccess && data?.results) {
            const fetchPokemonDetails = async () => {
                const pokemonsList = await Promise.all(
                    data.results.map(async pokemon => {
                        try {
                            const id = getPokemonIdByUrl(pokemon.url);

                            // Dispatch RTK Query fetches manually
                            const [pokemonData, pokemonSpeciesData] = await Promise.all([
                                pokeapi.pokemonById(id),
                                pokeapi.pokemonSpecies(id),
                            ]);

                            const pokemonDetails = pokemonData.kind === 'ok' ? pokemonData.data : null;
                            const pokemonSpeciesDetails =
                                pokemonSpeciesData.kind === 'ok' ? pokemonSpeciesData.data : null;

                            return castPokemonDataInEspecialFormate(pokemonDetails, pokemonSpeciesDetails);
                        } catch (error) {
                            console.error(`Failed to fetch Pokémon ${pokemon.url}`, error);
                            return null;
                        }
                    }),
                );

                setAllPokemons(prevAllPokemons => {
                    const uniquePokemons = [
                        ...prevAllPokemons, // Spread previous state
                        ...pokemonsList.filter(Boolean), // Add new data
                    ];
    
                    // Filter out duplicates by id
                    return uniquePokemons.filter(
                        (pokemon, index, self) => 
                            index === self.findIndex(p => p.id === pokemon.id)
                    );
                });
            
            };

            fetchPokemonDetails();
        }
    }, [data, isSuccess]);

    const loadMorePokemons = useCallback(() => {
        if (!isFetching && data?.next) {
            setOffset(prev => prev + limit); // Increment offset for pagination
        }
    }, [isFetching, data?.next]);

    // Debounce the loadMorePokemons function for better performance
    const debouncedLoadMore = useDebounce(loadMorePokemons, 500);

    return { allPokemons, loadMorePokemons: debouncedLoadMore, isFetching, isSuccess, isLoading };
};

export { useGetPaginatedPokemons };
