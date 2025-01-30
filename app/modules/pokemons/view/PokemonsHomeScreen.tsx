import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { navigateTo, resetRoot } from '../../navigation/navigationUtil'
import { useAppDispatch } from '../../main/src/configureStore'
import { logout } from '../../auth/src/authReducer'

const PokemonsHomeScreen = () => {
    const dispatch = useAppDispatch();
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