import { BasicResponse } from '../../api.types';
import ResourceApi from '../../resource';
import { PokemonApiResult } from './pokemons.types';

export class PokemonApi extends ResourceApi {
    constructor() {
        super({ endpoint: 'pokemons' });
    }

    async pokemons(offset: number, limit: number) {
        const response = await this.api.apisauce.get<BasicResponse<PokemonApiResult>>(
            `/pokemon?offset=${offset}&limit=${limit}`,
        );
        return this.api.transformResponse(response);
    }

    async pokemonByIdName(value: string) {
        const response = await this.api.apisauce.get<BasicResponse<pokemon.PokemonResponseById>>(`/pokemon/${value}`);
        return this.api.transformResponse(response);
    }

    async pokemonSpecies(id: string) {
        const response = await this.api.apisauce.get<BasicResponse<pokemon.PokemonSpecie>>(`/pokemon-species/${id}`);
        return this.api.transformResponse(response);
    }
}
