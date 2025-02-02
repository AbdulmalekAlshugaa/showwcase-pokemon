import { useState, useCallback } from "react";
import { useGetPokemonsQuery } from "./useGetPokemonsQuery";
import getPokemonImage from "../../main/src/utils/getPokemonImageById";


export const useGetPaginatedPokemons = () => {
    const [offset, setOffset] = useState(0);
    const limit = 10;
    const { data, isFetching, isSuccess, isLoading } = useGetPokemonsQuery({ offset, limit });

    // Modify data to include images
    const modifiedResults = isSuccess
        ? data?.results.map((pokemon: any) => {
              const id = pokemon.url.match(/\/(\d+)\/$/)[1];
              return {
                  ...pokemon,
                  id,
                  image: getPokemonImage(id),
              };
          })
        : [];

    // Load more function
    const loadMorePokemons = useCallback(() => {
        if (!isLoading) {
            setOffset((prevOffset) => prevOffset + limit);
        }
    }, [isLoading]);

    return { allPokemons: modifiedResults, isSuccess, isFetching, isLoading, loadMorePokemons };
};
