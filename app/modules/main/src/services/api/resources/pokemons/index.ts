import { BasicResponse } from '../../api.types';
import ResourceApi from '../../resource';
import { PokemonApiResult } from './pokemons.types';

export class PokemonApi extends ResourceApi {
    constructor() {
        super({ endpoint: 'pokemons' });
    }

    async pokemons(offset:number, limit: number) {
        const response = await this.api.apisauce.get<BasicResponse<PokemonApiResult>>('/pokemon', {
            offset,
            limit
        });
        return this.api.transformResponse(response);
    }

    async pokemonById(id: string) {
        const response = await this.api.apisauce.get<BasicResponse<pokemon.PokemonResponseById>>(`/pokemon/${id}`);
        return this.api.transformResponse(response);
    }

    async pokemonSpecies(id: string) {
        const response = await this.api.apisauce.get<BasicResponse<pokemon.PokemonSpecie>>(`/pokemon-species/${id}`);
        return this.api.transformResponse(response);
    }
}
