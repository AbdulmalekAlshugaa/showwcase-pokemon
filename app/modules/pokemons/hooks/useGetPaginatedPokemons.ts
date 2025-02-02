import { useState, useCallback } from "react";
import { useGetPokemonsQuery } from "./useGetPokemonsQuery";


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
                  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
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
