import { createDefaultStackNavigator } from "../../navigation/createStackNavigatorUtil";
import PokemonsHomeScreen from "../view/PokemonsHomeScreen";
import { PokemonRoute } from "./pokemonsRoute";


export const MainAppFlowStack = createDefaultStackNavigator(
   "main", // pod name for scalability
    {
        [PokemonRoute.PokemonList]: PokemonsHomeScreen, 
        [PokemonRoute.PokemonDetails]: PokemonsHomeScreen,
    },
    {
        initialRouteName: PokemonRoute.PokemonList,
    }
);
