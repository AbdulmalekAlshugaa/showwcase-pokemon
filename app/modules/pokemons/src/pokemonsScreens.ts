import { createDefaultStackNavigator } from "../../navigation/createStackNavigatorUtil";
import { PokemonsDetailsScree, PokemonsHomeScreen } from "../view";
import { PokemonRoute } from "./pokemonsRoute";


export const MainAppFlowStack = createDefaultStackNavigator(
    {
        [PokemonRoute.PokemonList]: PokemonsHomeScreen, 
        [PokemonRoute.PokemonDetails]: PokemonsDetailsScree,
    },
    {
        initialRouteName: PokemonRoute.PokemonList,
    }
);
