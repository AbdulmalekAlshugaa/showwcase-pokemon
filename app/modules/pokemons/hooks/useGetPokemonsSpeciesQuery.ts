import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 // Assume this is your API handler
import Config from "../../config";
export const pokemonSpeciesApi = createApi({
    reducerPath: 'pokemonApiSpecies',
    baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
    endpoints: (builder) => ({
      getPokemonsSpecies: builder.query({
        query: ({ id }) => `/pokemon-species/${id}`,
        serializeQueryArgs: ({ endpointName }) => endpointName, 
        merge: (currentCache, newCache) => {
            if (!currentCache.results) {
                currentCache.results = [];
            }
            currentCache.results.push(...newCache.results);
        },
      
      }),
    }),
  });

export const { useGetPokemonsSpeciesQuery } = pokemonSpeciesApi;
