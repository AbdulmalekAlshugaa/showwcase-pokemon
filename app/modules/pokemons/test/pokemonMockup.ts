export const mockPokemonDetails: pokemon.PokemonResponseById = {
    id: 2,
    name: 'Ivysaur',
    abilities: [
        {
            ability: {
                name: 'Overgrow',
                url: 'https://pokeapi.co/api/v2/ability/65/',
            },
            is_hidden: false,
            slot: 1,
        },
        {
            ability: {
                name: 'Chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            is_hidden: true,
            slot: 3,
        },
    ],
    base_experience: 142,
    forms: [
        {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon-form/2/',
        },
    ],
    game_indices: [
        {
            game_index: 2,
            version: {
                name: 'white-2',
                url: 'https://pokeapi.co/api/v2/version/22/',
            },
        },
    ],
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/2/encounters',
    moves: [
        {
            move: {
                name: 'razor-wind',
                url: 'https://pokeapi.co/api/v2/move/13/',
            },
        },
        {
            move: {
                name: 'swords-dance',
                url: 'https://pokeapi.co/api/v2/move/14/',
            },
        },
    ],
    order: 2,
    species: {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
    },
    sprites: {
        other: {
            'official-artwork': {
                front_default:
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
            },
        },
    },
    types: [
        {
            slot: 1,
            type: {
                name: 'Grass',
                url: 'https://pokeapi.co/api/v2/type/12/',
            },
        },
        {
            slot: 2,
            type: {
                name: 'Poison',
                url: 'https://pokeapi.co/api/v2/type/4/',
            },
        },
    ],
    stats: [
        {
            base_stat: 60,
            effort: 0,
            stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/',
            },
        },

        {
            base_stat: 62,
            effort: 0,
            stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/',
            },
        },
        {
            base_stat: 63,
            effort: 0,
            stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/',
            },
        },
        {
            base_stat: 80,
            effort: 1,
            stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/',
            },
        },
        {
            base_stat: 80,
            effort: 1,
            stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/',
            },
        },
        {
            base_stat: 60,
            effort: 0,
            stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/',
            },
        },
    ],
    height: 10,
    weight: 130,
};

export const mockPokemonSpecies: pokemon.PokemonSpecie = {
    base_happiness: 1,
    capture_rate: 45,
    color: {
        name: 'green',
        url: 'https://pokeapi.co/api/v2/pokemon-color/5/',
    },
    egg_groups: [
        {
            name: 'monster',
            url: 'https://pokeapi.co/api/v2/egg-group/1/',
        },
        {
            name: 'plant',
            url: 'https://pokeapi.co/api/v2/egg-group/7/',
        },
    ],
    flavor_text_entries: [
        {
            flavor_text:
                'There is a plant bulb on its back. When it absorbs nutrients, the bulb is said to blossom into a large flower.',
            language: {
                name: 'en',
                url: 'https://pokeapi.co/api/v2/language/9/',
            },
            version: {
                name: 'red',
                url: 'https://pokeapi.co/api/v2/version/1/',
            },
        },
        {
            flavor_text:
                'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
            language: {
                name: 'en',
                url: 'https://pokeapi.co/api/v2/language/9/',
            },
            version: {
                name: 'blue',
                url: 'https://pokeapi.co/api/v2/version/2/',
            },
        },
    ],
    gender_rate: 87.5,
    genera: [
        {
            genus: 'Seed',
            language: {
                name: 'en',
                url: 'https://pokeapi.co/api/v2/language/9/',
            },
        },
    ],

    names: [
        {
            language: {
                name: 'en',
                url: 'https://pokeapi.co/api/v2/language/9/',
            },
            name: 'Ivysaur',
        },
    ],
    order: 2,
    evolution_chain: {
        url: 'https://pokeapi.co/api/v2/evolution-chain/1/',
    },
};
