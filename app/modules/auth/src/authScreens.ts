import { createDefaultStackNavigator } from "../../navigation/createStackNavigatorUtil";
import AuthLoginScreen from "../view/authLoginScreen";
import { AuthRoutes } from "./authRoutes";

export const AuthFlowStack = createDefaultStackNavigator(
    "auth", // pod name for scalability
    {
        [AuthRoutes.AuthLogin]: AuthLoginScreen, // Fix: Use the component directly
    },
    {
        initialRouteName: AuthRoutes.AuthLogin,
    }
);
