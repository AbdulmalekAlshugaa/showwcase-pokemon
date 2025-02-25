import { createDefaultStackNavigator } from '../../navigation/createStackNavigatorUtil';
import { PokemonsDetailsScreen, PokemonsHomeScreen } from '../view';
import { PokemonRoute } from './pokemonsRoute';

// admin, user, guest roles

export const MainAppFlowStack = createDefaultStackNavigator(
    {
        [PokemonRoute.PokemonList]: PokemonsHomeScreen,
        [PokemonRoute.PokemonDetails]: PokemonsDetailsScreen,
    },
    {
        initialRouteName: PokemonRoute.PokemonList,
    },
);
