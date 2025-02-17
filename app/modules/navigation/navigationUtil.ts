import { useEffect, useRef } from 'react';
import { BackHandler, Platform } from 'react-native';
import { NavigationState, ParamListBase, PartialState, createNavigationContainerRef } from '@react-navigation/native';

/**
 * Reference to the root App Navigator.
 *
 * If needed, you can use this to access the navigation object outside of a
 * `NavigationContainer` context. However, it's recommended to use the `useNavigation` hook whenever possible.
 * @see Navigating Without Navigation Prop]{@link https://reactnavigation.org/docs/navigating-without-navigation-prop/}
 *
 * The types on this reference will only let you reference top level navigators. If you have
 * nested navigators, you'll need to use the `useNavigation` with the stack navigator's ParamList type.
 */

export const navigationRef = createNavigationContainerRef<ParamListBase>();
/**
 * Gets the current screen from any navigation state.
 * @param {NavigationState | PartialState<NavigationState>} state - The navigation state to traverse.
 * @returns {string} - The name of the current screen.
 */
export function getActiveRouteName(state: NavigationState | PartialState<NavigationState>): string {
    const route = state.routes[state.index ?? 0];

    // Found the active route -- return the name
    if (!route.state) return route.name;

    // Recursive call to deal with nested routers
    return getActiveRouteName(route.state as NavigationState);
}

const iosExit = () => false;

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 * @see [BackHandler]{@link https://reactnative.dev/docs/backhandler}
 * @param {(routeName: string) => boolean} canExit - Function that returns whether we can exit the app.
 * @returns {void}
 */
export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
    // The reason we're using a ref here is because we need to be able
    // to update the canExit function without re-setting up all the listeners
    const canExitRef = useRef(Platform.OS !== 'android' ? iosExit : canExit);

    useEffect(() => {
        canExitRef.current = canExit;
    }, [canExit]);

    useEffect(() => {
        // We'll fire this when the back button is pressed on Android.
        const onBackPress = () => {
            if (!navigationRef.isReady()) {
                return false;
            }

            // grab the current route
            const routeName = getActiveRouteName(navigationRef.getRootState());

            // are we allowed to exit?
            if (canExitRef.current(routeName)) {
                // exit and let the system know we've handled the event
                BackHandler.exitApp();
                return true;
            }

            // we can't exit, so let's turn this into a back action
            if (navigationRef.canGoBack()) {
                navigationRef.goBack();
                return true;
            }

            return false;
        };

        // Subscribe when we come to life
        BackHandler.addEventListener('hardwareBackPress', onBackPress);

        // Unsubscribe when we're done
        return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []);
}

/**
 * use this to navigate without the navigation
 * prop. If you have access to the navigation prop, do not use this.
 * @see {@link https://reactnavigation.org/docs/navigating-without-navigation-prop/}
 * @param {unknown} name - The name of the route to navigate to.
 * @param {unknown} params - The params to pass to the route.
 */
export function navigateTo<RouteName extends keyof ParamListBase>(name: RouteName, params?: ParamListBase[RouteName]) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

/**
 * This function is used to go back in a navigation stack, if it's possible to go back.
 * If the navigation stack can't go back, nothing happens.
 * The navigationRef variable is a React ref that references a navigation object.
 * The navigationRef variable is set in the App component.
 */
export function goBack() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
        navigationRef.goBack();
    }
}

/**
 * resetRoot will reset the root navigation state to the given params.
 * @param {Parameters<typeof navigationRef.resetRoot>[0]} state - The state to reset the root to.
 * @returns {void}
 */
export function resetRoot(state: Parameters<typeof navigationRef.resetRoot>[0] = { index: 0, routes: [] }) {
    if (navigationRef.isReady()) {
        navigationRef.resetRoot(state);
    }
}

// Check if the current route is the first screen in the stack navigator
export const isCurrentRouteInitialRoute = (navigationState: NavigationState | null): boolean => {
    if (!navigationState || !navigationState.routes) {
        return false;
    }
    const route = navigationState.routes[navigationState.index];
    if (!route.state) {
        return navigationState.index === 0;
    }
    return isCurrentRouteInitialRoute(route.state as NavigationState);
};
