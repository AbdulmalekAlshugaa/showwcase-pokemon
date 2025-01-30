import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#5669FF',
    secondary: '#7974E7',
    tertiary: '#FFE358',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#757575',
    lightGrey: '#c0c0c0',
};
export const SIZES = {
    // global sizes
    S_1: 2,
    S_2: 4,
    S_3: 6,
    S_4: 8,
    S_5: 10,
    S_6: 12,
    S_7: 14,
    S_8: 16,
    S_9: 18,
    S_10: 20,

    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: Platform.OS === 'ios' ? 54 : 44,
    buttonRadius: 4,
    borderRadius: 8,
    width,
    height,
};

export const TYPOGRAPHY = {
    displayLarge: 'displayLarge',
    displayMedium: 'displayMedium',
    displaySmall: 'displaySmall',

    headlineLarge: 'headlineLarge',
    headlineMedium: 'headlineMedium',
    headlineSmall: 'headlineSmall',

    titleLarge: 'titleLarge',
    titleMedium: 'titleMedium',
    titleSmall: 'titleSmall',

    bodyLarge: 'bodyLarge',
    bodyMedium: 'bodyMedium',
    bodySmall: 'bodySmall',

    labelLarge: 'labelLarge',
    labelMedium: 'labelMedium',
    labelSmall: 'labelSmall',
};

export const POKEMON_TYPE_COLORS = {
    normal: '#A8A878',
    fighting: '#C03028',
    flying: '#A890F0',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
    fire: '#FA6C6C',
    water: '#6890F0',
    grass: '#48CFB2',
    electric: '#FFCE4B',
    psychic: '#F85888',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC',
} as const;

const appTheme = { COLORS, SIZES, TYPOGRAPHY, POKEMON_TYPE_COLORS };

export default appTheme;
