import { useState, useEffect, useCallback } from 'react';
import { useGetPokemonsQuery } from './useGetPokemonsQuery';
import getPokemonIdByUrl from '../../main/src/utils/getPokemonIdByUrl';
import castPokemonDataInEspecialFormate from '../../main/src/utils/getPokemonData';
import { pokeapi } from '../../main/src/services/api';
import useDebounce from '../../main/hooks/useDebounce';

const useGetPaginatedPokemons = () => {
    const [offset, setOffset] = useState(0);
    const limit = 10;
    const [allPokemons, setAllPokemons] = useState<any[]>([]);
    const [isFullLoading, setIsFullLoading] = useState<boolean>(false); // New state for full loading tracking

    const { data, isFetching, isSuccess } = useGetPokemonsQuery({ offset, limit });

    // Fetch the Pokemon details when data changes
    useEffect(() => {
        if (isSuccess && data?.results) {
            const fetchPokemonDetails = async () => {
                setIsFullLoading(true); // Set loading to true when the data fetching starts
                const pokemonsList = [];

                for (let pokemon of data.results) {
                    try {
                        const id = getPokemonIdByUrl(pokemon.url);
                        const [pokemonData, pokemonSpeciesData] = await Promise.all([
                            pokeapi.pokemonById(id),
                            pokeapi.pokemonSpecies(id)
                        ]);

                        const pokemonDetails = pokemonData.kind === 'ok' ? pokemonData.data : null;
                        const pokemonSpeciesDetails = pokemonSpeciesData.kind === 'ok' ? pokemonSpeciesData.data : null;

                        const formattedPokemon = castPokemonDataInEspecialFormate(pokemonDetails, pokemonSpeciesDetails);
                        if (formattedPokemon) {
                            pokemonsList.push(formattedPokemon);
                        }
                    } catch (error) {
                        console.error(`Failed to fetch Pokémon ${pokemon.url}`, error);
                    }
                }

                // Update state with the new list and avoid duplicates
                setAllPokemons(prevAllPokemons => {
                    const uniquePokemons = [
                        ...prevAllPokemons, // Spread previous state
                        ...pokemonsList.filter(Boolean), // Add new data
                    ];

                    return uniquePokemons.filter(
                        (pokemon, index, self) => index === self.findIndex(p => p.id === pokemon.id)
                    );
                });

                setIsFullLoading(false); // Set loading to false after fetching is complete
            };

            fetchPokemonDetails();
        }
    }, [data, isSuccess]);

    // Debounced function to load more when user scrolls
    const loadMorePokemons = useCallback(() => {
        if (!isFetching && data?.next) {
            setOffset(prev => prev + limit); // Increment offset for pagination
        }
    }, [isFullLoading, data?.next]);


    return {
        allPokemons,
        loadMorePokemons, // Pass this function to FlatList
        isFetching,
        isSuccess,
        isLoading:isFullLoading
    };
};

export { useGetPaginatedPokemons };
