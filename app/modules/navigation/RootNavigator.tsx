import React from 'react';
import { AuthFlowStack } from '../auth/src/authScreens';
import { MainAppFlowStack } from '../pokemons/src/pokemonsScreens';
import { RootState, useAppSelector } from '../main/src/configureStore';


export default function RootNavigator() {
    const isAuthenticated = useAppSelector((state: RootState) => state.auth.isAuthenticated);

    return isAuthenticated ? <MainAppFlowStack /> : <AuthFlowStack />;
}
