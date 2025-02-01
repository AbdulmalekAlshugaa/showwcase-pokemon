import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { navigateTo } from '../../navigation/navigationUtil';
import PokemonsCard from './PokemonsCard';
import AppLoading from '@/app/components/AppLoading';
import { useGetPaginatedPokemons } from '../hooks';

const PokemonsHomeScreen = () => {
    const { allPokemons, isSuccess, isLoading, loadMorePokemons } = useGetPaginatedPokemons();


    const ListFooterComponent = useMemo(
        () => (isLoading ? <AppLoading color={'primary'} style={{ marginVertical: 8 }} /> : null),
        [isLoading],
    );

    return (
      <>
      <StatusBar translucent backgroundColor={"transparent"} />
        <View>
            {isLoading && <Text>Loading...</Text>}
            {isSuccess && (
                <FlatList
                    data={allPokemons}
                    renderItem={({ item }) => (
                        <PokemonsCard
                            name={item.name}
                            image={item.image}
                            type={item.types.map((type: any) => type.name).join('').toLowerCase()}
                            onPress={() => navigateTo('PokemonsDetailsScreen', { item: item })}
                        />
                    )}
                    keyExtractor={item => item.id}
                    onEndReached={loadMorePokemons}
                    onEndReachedThreshold={0.5}
                    numColumns={2}
                    ListFooterComponent={ListFooterComponent}
                />
            )}
        </View>
      </>
    );
};

export default PokemonsHomeScreen;

const styles = StyleSheet.create({});
