/* eslint-disable import/first */
/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
if (__DEV__) {
    // Load Reactotron in development only.
    // Note that you must be using metro's `inlineRequires` for this to work.
    // If you turn it off in metro.config.js, you'll have to manually import it.
    require('./app/devtools/ReactotronConfig');
}

import { SafeAreaView, Text } from 'react-native';
import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './app/modules/main/src/configureStore';
import RootNavigator from './app/modules/navigation/RootNavigator';
import { PaperProvider } from 'react-native-paper';

export default function App() {
    const onBeforeLiftPersistGate = () => {
        // If your initialization scripts run very fast, it's good to show the splash screen for just a bit longer to prevent flicker.
        // Slightly delaying splash screen hiding for better UX; can be customized or removed as needed,
        // Note: (vanilla Android) The splash-screen will not appear if you launch your app via the terminal or Android Studio. Kill the app and launch it normally by tapping on the launcher icon. https://stackoverflow.com/a/69831106
        // Note: (vanilla iOS) You might notice the splash-screen logo change size. This happens in debug/development mode. Try building the app for release.
        // setTimeout(hideSplashScreen, 500);
    };
    return (
        <PaperProvider>
            <Provider store={store}>
                <PersistGate loading={null} onBeforeLift={onBeforeLiftPersistGate} persistor={persistor}>
                    <RootNavigator />
                </PersistGate>
            </Provider>
        </PaperProvider>
    );
}
