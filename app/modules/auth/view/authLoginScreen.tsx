import { Alert, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { useAppDispatch } from '../../main/src/configureStore';
import { login } from '../src/authReducer';
import { useLoginUserMutation } from '../../main/src/services/api/resources/authApi';

const AuthLoginScreen = () => {
    const dispatch = useAppDispatch();
    const [loginUser, { isLoading, error, isSuccess }] = useLoginUserMutation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        try {
            const response = await loginUser({ username, password }).unwrap();

            dispatch(login(response));
        } catch (err: any) {
            Alert.alert('Login error:', err.data.message);
        }
    };

    return (
        <View
            style={{
                justifyContent: 'center',
                marginTop: 20,
            }}
        >
            <TextInput
                style={{
                    marginBottom: 20,
                }}
                label="Email"
                onChangeText={text => {
                    setUsername(text);
                }}
            />
            <TextInput
                style={{
                    marginBottom: 20,
                }}
                label="Password"
                onChangeText={text => {
                    setPassword(text);
                }}
            />

            <Button mode="contained" onPress={handleLogin}>
                Login
            </Button>
        </View>
    );
};

export default AuthLoginScreen;

const styles = StyleSheet.create({});
