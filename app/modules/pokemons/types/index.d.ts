declare namespace pokemon {
    interface State {
        AuthActionName: string;
    }
    interface Ability {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }
    interface Form {
        name: string;
        url: string;
    }
    interface GameIndice {
        game_index: number;
        version: {
            name: string;
            url: string;
        };
    }

    interface Move {
        move: {
            name: string;
            url: string;
        };
    }
    type stat = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';
    interface Stat {
        base_stat: number;
        effort: number;
        stat: {
            name: stat;
            url: string;
        };
    }
    interface Type {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }

    interface PokemonResponseById {
        abilities: Ability[];
        base_experience: number;
        forms: Form[];
        game_indices: GameIndice[];
        height: number;
        id: number;
        is_default: boolean;
        location_area_encounters: string;
        moves: Move[];
        name: string;
        order: number;
        species: {
            name: string;
            url: string;
        };
        sprites: {
            other: {
                'official-artwork': {
                    front_default: string;
                };
            };
        };
        stats: Stat[];
        types: Type[];
        weight: number;
    }

    interface EggGroup {
        name: string;
        url: string;
    }

    interface FlavorTextEntry {
        flavor_text: string;
        language: {
            name: string;
            url: string;
        };
        version: {
            name: string;
            url: string;
        };
    }

    interface Genera {
        genus: string;
        language: {
            name: string;
            url: string;
        };
    }

    interface Name {
        language: {
            name: string;
            url: string;
        };
        name: string;
    }

    interface PokemonSpecie {
        base_happiness: number;
        capture_rate: number;
        color: {
            name: string;
            url: string;
        };
        egg_groups: EggGroup[];
        flavor_text_entries: FlavorTextEntry[];
        gender_rate: number;
        genera: Genera[];
        names: Name[];
        order: number;
        evolution_chain: {
            url: string;
        };
    }
}
