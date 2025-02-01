import { createApi, fetchBaseQuery, QueryReturnValue } from "@reduxjs/toolkit/query/react";
 // Assume this is your API handler

import Config from "../../config";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
    endpoints: (builder) => ({
      getPokemons: builder.query({
        query: ({ offset = 0, limit = 20 }) => `/pokemon?offset=${offset}&limit=${limit}`,
        serializeQueryArgs: ({ endpointName }) => endpointName, // Ensures proper caching
        merge: (currentCache, newCache) => {
            if (!currentCache.results) {
                currentCache.results = [];
            }
            currentCache.results.push(...newCache.results);
        },
        forceRefetch({ currentArg, previousArg }) {
          return currentArg?.offset !== previousArg?.offset;
        },
      }),
    }),
  });

export const { useGetPokemonsQuery } = pokemonApi;
