import { useNetworkStatus } from 'netly-rn-expo';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, InteractionManager, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

// Configuration constants
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const ANIMATION_DURATION = 400;
const DISMISS_TIMEOUT = 3000;
const TOAST_HEIGHT = STATUS_BAR_HEIGHT + 34;

const COLOR_DISCONNECTED = '#F44336'; // Red for disconnected
const COLOR_CONNECTED = '#4CAF50'; // Green for restored connection

export enum NetworkStatus {
    NO_CONNECTION = 'No Connection',
    CONNECTED = 'Connected',
    SLOW_CONNECTION = 'Slow Connection',
}

const NetworkStatusToast: React.FC = () => {
    const [networkState, prevNetworkState] = useNetworkStatus();

    // Local state for controlling toast display
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState(COLOR_CONNECTED);

    // Animated value for the toast
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Ignore null (undetermined) state

        if (networkState === NetworkStatus.NO_CONNECTION && networkState !== prevNetworkState) {
            setToastMessage('No Internet Connection');
            setToastColor(COLOR_DISCONNECTED);
            show();
        } else if (prevNetworkState === NetworkStatus.NO_CONNECTION && networkState === NetworkStatus.CONNECTED) {
            setToastMessage('Internet Connection Restored');
            setToastColor(COLOR_CONNECTED);
            show();
        } else if (prevNetworkState === NetworkStatus.CONNECTED && networkState === NetworkStatus.SLOW_CONNECTION) {
            setToastMessage('slow internet connection');
            setToastColor(COLOR_CONNECTED);
            show();
        }
        const timeout = setTimeout(() => dismiss(), DISMISS_TIMEOUT);
        return () => clearTimeout(timeout);
    }, [networkState]);

    const show = () => {
        InteractionManager.runAfterInteractions(() => {
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: ANIMATION_DURATION,
                useNativeDriver: false,
            }).start(() => setShowToast(true));
        });
    };

    const dismiss = () => {
        // Only dismiss if still connected (or if you want to dismiss regardless)
        if (prevNetworkState === NetworkStatus.CONNECTED && networkState === NetworkStatus.CONNECTED) {
            InteractionManager.runAfterInteractions(() => {
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: ANIMATION_DURATION,
                    useNativeDriver: false,
                }).start(() => setShowToast(false));
            });
        }
    };

    // Interpolate animated value for styling
    const toastAnimateStyle = {
        height: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, TOAST_HEIGHT],
        }),
        paddingTop: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, STATUS_BAR_HEIGHT + 8],
        }),
        marginBottom: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -STATUS_BAR_HEIGHT],
        }),
        backgroundColor: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['transparent', toastColor],
        }),
    };

    // If the toast is not visible, don't render anything
    if (!showToast && animatedValue.__getValue() === 0) {
        return null;
    }

    return (
        <Animated.View style={[styles.toast, toastAnimateStyle]}>
            {Platform.OS === 'ios' && <StatusBar barStyle="light-content" animated />}
            <Text style={styles.toastText}>{toastMessage}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    toast: {
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1000,
    },
    // eslint-disable-next-line react-native/no-color-literals
    toastText: {
        color: '#fff',
        fontSize: 14,
        paddingHorizontal: 16,
        textAlign: 'center',
    },
});

export default NetworkStatusToast;
