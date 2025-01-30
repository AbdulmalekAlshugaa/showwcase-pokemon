import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { COLORS } from '../main/src/constants';

;

export type NavigatorConfig = {
    headerMode?: 'float' | 'screen';
    initialRouteName?: string;
};

export type Pod = 'auth' | 'main';
const isStaging = false; // TODO: Implement this function

export const DEFAULT_STACK_NAVIGATOR_HEADER_MODE: NavigatorConfig['headerMode'] = isStaging
    ? 'float'
    : 'screen';

export function createDefaultStackNavigatorFactory(defaultHeaderMode: NavigatorConfig['headerMode']) {
    const defaultNavigatorConfig: NavigatorConfig = {
        headerMode: defaultHeaderMode,
    };

    return function createMLStackNavigator(
        pod: Pod,
        routeConfig: Record<string, any>,
        navigatorConfig: NavigatorConfig = defaultNavigatorConfig
    ) {
        const Stack = createNativeStackNavigator();

        return function StackNavigatorComponent() {
            return (
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName={navigatorConfig.initialRouteName}
                        screenOptions={{
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: COLORS.white,
                            },
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            contentStyle: {
                                backgroundColor: COLORS.white,
                            },
                            gestureEnabled: Platform.OS === 'ios',
                        }}
                    >
                        {Object.entries(routeConfig).map(([name, component]) => (
                            <Stack.Screen key={name} name={name} component={component} />
                        ))}
                    </Stack.Navigator>
                </NavigationContainer>
            );
        };
    };
}

export const createDefaultStackNavigator = createDefaultStackNavigatorFactory(DEFAULT_STACK_NAVIGATOR_HEADER_MODE);
