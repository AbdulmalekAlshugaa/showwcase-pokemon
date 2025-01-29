import { Text, View } from 'react-native';
import React from 'react';
import { store, persistor } from './modules/main/src/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

export default function App() {
    const onBeforeLiftPersistGate = () => {
        // If your initialization scripts run very fast, it's good to show the splash screen for just a bit longer to prevent flicker.
        // Slightly delaying splash screen hiding for better UX; can be customized or removed as needed,
        // Note: (vanilla Android) The splash-screen will not appear if you launch your app via the terminal or Android Studio. Kill the app and launch it normally by tapping on the launcher icon. https://stackoverflow.com/a/69831106
        // Note: (vanilla iOS) You might notice the splash-screen logo change size. This happens in debug/development mode. Try building the app for release.
        // setTimeout(hideSplashScreen, 500);
    };
    return (
        <Provider store={store}>
            <PersistGate loading={null} onBeforeLift={onBeforeLiftPersistGate} persistor={persistor}>
                <View>
                    <Text>App</Text>
                </View>
            </PersistGate>
        </Provider>
    );
}
