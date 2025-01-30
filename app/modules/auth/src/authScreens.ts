import { createDefaultStackNavigator } from "../../navigation/createStackNavigatorUtil";
import AuthLoginScreen from "../view/authLoginScreen";
import { AuthRoutes } from "./authRoutes";

export const AuthFlowStack = createDefaultStackNavigator(
    "auth",
	{
		[AuthRoutes.AuthLogin]: { screen: AuthLoginScreen },
	},
	{
		initialRouteName: AuthRoutes.AuthLogin,
	},
);
