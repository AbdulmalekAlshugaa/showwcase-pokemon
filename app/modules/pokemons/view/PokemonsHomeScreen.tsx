import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from 'react-native-paper'
import { navigateTo, resetRoot } from '../../navigation/navigationUtil'
import { useAppDispatch } from '../../main/src/configureStore'
import { logout } from '../../auth/src/authReducer'
import { getPokemonsThunk } from '../src/pokemonsThunks'


const PokemonsHomeScreen = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('PokemonsHomeScreen');
        dispatch(getPokemonsThunk());
    }, []);
    const handleNavigation = () => {
        dispatch(logout());
    }
  return (
    <View>
        <Button icon="camera" mode="contained" onPress={handleNavigation}>
            LogOut 
            
        </Button>
      <Text>PokemonsHomeScreen</Text>
    </View>
  )
}

export default PokemonsHomeScreen

const styles = StyleSheet.create({})