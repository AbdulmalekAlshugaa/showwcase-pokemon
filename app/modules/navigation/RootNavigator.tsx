import React from 'react';
import { AuthFlowStack } from '../auth/src/authScreens';
import { MainAppFlowStack } from '../pokemons/src/pokemonsScreens';
import {useAppSelector } from '../main/src/configureStore';
import { isUserLoggedIn } from '../auth/src/authSelectors';


export default function RootNavigator() {
    const isAuthenticated = useAppSelector(isUserLoggedIn);


    return isAuthenticated ? <MainAppFlowStack /> : <AuthFlowStack />;
}
