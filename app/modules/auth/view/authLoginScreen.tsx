import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useAppDispatch } from '../../main/src/configureStore';
import { login } from '../src/authReducer';

const AuthLoginScreen = () => {
    const dispatch = useAppDispatch();
    const handleNavigation = () => {
        dispatch(login({
            id: "12345",
            token: "some-jwt-token",
        }));
    };
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
             <Button icon="camera" mode="contained" onPress={handleNavigation}>
            Login  
            
        </Button>
            <Text>authLoginScreen</Text>

        </View>
    );
};

export default AuthLoginScreen;

const styles = StyleSheet.create({});
