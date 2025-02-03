import { RootState } from '../../main/src/configureStore';
import * as pokemonSelectors from '../src/pokemoneDetailsSelectors';
import { mockPokemonDetails, mockPokemonSpecies } from './pokemonMockup';

describe('Test :: Pokemon details', () => {
    const mockState = {
        pokemonDetails: {
            loading: false,
            error: null,
            success: true,
            pokemonInfo: mockPokemonDetails,
            pokemonSpecies: mockPokemonSpecies,
        },
    };
    test('should return pokemon details', () => {
        const result = pokemonSelectors.pokemonDetailsSelector(mockState as RootState);
        expect(result).not.toBeNull();
        expect(result?.name).toBe('Ivysaur');
        expect(result?.abilites).toHaveLength(2);

    });

    test('should return loading state', () => {
        const result = pokemonSelectors.pokemonDetailsLoadingSelector(mockState as RootState);
        expect(result).toBeFalsy();
    });

    test('should return error state', () => {
        const result = pokemonSelectors.pokemonDetailsErrorSelector(mockState as RootState);
        expect(result).toBeNull();
    });

    test('should return success state', () => {
        const result = pokemonSelectors.pokemonDetailsSuccessSelector(mockState as RootState);
        expect(result).toBeTruthy();
    });

    test('should return pokemon info', () => {
        const result = pokemonSelectors.pokemonInfoSelector(mockState as RootState);
        expect(result).not.toBeNull();
        expect(result?.name).toBe('Ivysaur');
    });

    test('should return pokemon species', () => {
        const result = pokemonSelectors.pokemonSpeciesSelector(mockState as RootState);
        expect(result).not.toBeNull();
        expect(result?.genera).toHaveLength(1);
    });

    test('should return null if no pokemon info', () => {
        const result = pokemonSelectors.pokemonDetailsSelector({ pokemonDetails: { ...mockState.pokemonDetails, pokemonInfo: null } } as RootState);
        expect(result).toBeNull();
    });

    test('should return null if no pokemon species', () => {
        const result = pokemonSelectors.pokemonDetailsSelector({ pokemonDetails: { ...mockState.pokemonDetails, pokemonSpecies: null } } as RootState);
        expect(result).toBeNull();
    });

    test('should return null if no pokemon info and species', () => {
        const result = pokemonSelectors.pokemonDetailsSelector({ pokemonDetails: { ...mockState.pokemonDetails, pokemonInfo: null, pokemonSpecies: null } } as RootState);
        expect(result).toBeNull();
    });

    test('should return null if loading', () => {
        const result = pokemonSelectors.pokemonDetailsSelector({ pokemonDetails: { ...mockState.pokemonDetails, loading: true } } as RootState);
        expect(result).toBeNull();
    });

    test('should return null if loading species', () => {
        const result = pokemonSelectors.pokemonDetailsSelector({ pokemonDetails: { ...mockState.pokemonDetails, loading: true } } as RootState);
        expect(result).toBeNull();
    });

    test('should return null if loading info', () => {
        const result = pokemonSelectors.pokemonDetailsSelector({ pokemonDetails: { ...mockState.pokemonDetails, loading: true } } as RootState);
        expect(result).toBeNull();
    });

    test('should return null if loading info and species', () => {
        const result = pokemonSelectors.pokemonDetailsSelector({ pokemonDetails: { ...mockState.pokemonDetails, loading: true } } as RootState);
        expect(result).toBeNull();
    });

    

});
