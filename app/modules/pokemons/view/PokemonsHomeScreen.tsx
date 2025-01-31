import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import { Button } from 'react-native-paper';
import { navigateTo, resetRoot } from '../../navigation/navigationUtil';
import { useAppDispatch, useAppSelector } from '../../main/src/configureStore';
import { logout } from '../../auth/src/authReducer';
import { getPokemonsThunk } from '../src/pokemonsThunks';
import {
    selectPokemonsData,
    selectPokemonsSuccess,
    selectPokemonsError,
    selectPokemonsLoading,
} from '../src/pokemoneSelectors';
import PokemonsCard from './PokemonsCard';
import AppLoading from '@/app/components/AppLoading';

const PokemonsHomeScreen = () => {
    const dispatch = useAppDispatch();
    const pokemons = useAppSelector(selectPokemonsData);
    const isSuccess = useAppSelector(selectPokemonsSuccess);
    const isError = useAppSelector(selectPokemonsError);
    const isLoading = useAppSelector(selectPokemonsLoading);

    const loadMorePokemons = () => {
        dispatch(getPokemonsThunk(2, 20));
    };

    useEffect(() => {
        dispatch(getPokemonsThunk(1, 20));
    }, []);

    const ListFooterComponent = useMemo(
        () => (isLoading ? <AppLoading color={'primary'} style={{ marginVertical: 8 }} /> : <></>),
        [isLoading],
    );
    return (
        <View>
            {isLoading && <Text>Loading...</Text>}
            {isSuccess && (
                <FlatList
                    data={pokemons}
                    renderItem={({ item }) => (
                        <PokemonsCard
                            type={item.types[0].name.toLowerCase()}
                            name={item.name}
                            image={item.image}
                            onPress={() => navigateTo('PokemonDetailScreen', { id: item.id })}
                        />
                    )}
                    keyExtractor={item => item.id}
                    onEndReached={loadMorePokemons}
                    onEndReachedThreshold={0.5}
                    numColumns={2}
                    ListFooterComponent={ListFooterComponent}
                />
            )}
            {isError && <Text>Error</Text>}
        </View>
    );
};

export default PokemonsHomeScreen;

const styles = StyleSheet.create({});
