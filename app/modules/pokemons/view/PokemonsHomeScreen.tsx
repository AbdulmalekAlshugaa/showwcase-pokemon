import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { navigateTo } from '../../navigation/navigationUtil';
import PokemonsCard from './PokemonsCard';
import AppLoading from '@/app/components/AppLoading';
import { useGetPaginatedPokemons } from '../hooks';
import PokemonSearchModal from './PokemonSearchModal';
import { PokemonRoute } from '../src/pokemonsRoute';
import FBGroup from '@/app/components/FBGroup';
import { FAB_TYPE, FABTYPES } from '../src/pokemonsConstants';
import { useDispatch } from 'react-redux';
import { logout } from '../../auth/src/authReducer';
import { persistStore } from 'redux-persist';
import { store } from '../../main/src/configureStore';
const persistor = persistStore(store);

const PokemonsHomeScreen = () => {
    const { allPokemons, isSuccess, isLoading, loadMorePokemons } = useGetPaginatedPokemons();

    const [open, setOpen] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const ListFooterComponent = useMemo(
        () => (isLoading ? <AppLoading color={'primary'} size={'large'} style={{ marginVertical: 8 }} /> : null),
        [isLoading],
    );

    const handleLogout = () => {
        persistor.purge();
        dispatch(logout());
    };

    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <PokemonSearchModal visible={isModalVisible} hideModal={() => setModalVisible(false)} />

            <View>
                {isLoading && <Text>Loading...</Text>}

                {isSuccess && (
                    <FlatList
                        data={allPokemons}
                        renderItem={({ item }) => (
                            <PokemonsCard
                                name={item.name}
                                image={item.image}
                                type={'normal'}
                                onPress={() => navigateTo(PokemonRoute.PokemonDetails, { id: item.id, callApi: true })}
                            />
                        )}
                        keyExtractor={item => item.id + item.name}
                        onEndReached={loadMorePokemons}
                        onEndReachedThreshold={0.5}
                        numColumns={2}
                        ListFooterComponent={ListFooterComponent}
                    />
                )}

                <FBGroup
                    visible={true}
                    open={open}
                    setOpen={setOpen}
                    onActionPress={(action: FABTYPES) => {
                        if (action === FAB_TYPE.SEARCH) {
                            setModalVisible(true);
                        } else if (action === FAB_TYPE.LOGOUT) {
                            handleLogout();
                        } else {
                            console.log('FAB Pressed sss');
                        }
                    }}
                />
            </View>
        </>
    );
};

export default PokemonsHomeScreen;

const styles = StyleSheet.create({});
