import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Assume this is your API handler
import Config from '../../config';
export const pokemonDetailsApi = createApi({
    reducerPath: 'pokemonDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
    endpoints: builder => ({
        getPokemonsDetails: builder.query({
            query: ({ id }) => `/pokemon/${id}`,
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

export const { useGetPokemonsDetailsQuery } = pokemonDetailsApi;
