import { Alert, StyleSheet, Text, View } from 'react-native';
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
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                label="Email"
                onChangeText={text => {
                    setUsername(text);
                }}
            />
            <TextInput
                style={styles.textInput}
                label="Password"
                onChangeText={text => {
                    setPassword(text);
                }}
            />

            <Button loading={isLoading} mode="contained" onPress={handleLogin}>
                Login
            </Button>
            {error && <Text style={styles.textError}>{'something went wrong . ' as any}</Text>}
        </View>
    );
};

export default AuthLoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 20,
    },

    textInput: {
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
    textError: {
        marginTop: 10,
        color: 'red',
        textAlign: 'center',
    },
});
