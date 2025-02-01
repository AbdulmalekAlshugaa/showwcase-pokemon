import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { navigateTo } from '../../navigation/navigationUtil';
import PokemonsCard from './PokemonsCard';
import AppLoading from '@/app/components/AppLoading';
import { useGetPaginatedPokemons } from '../hooks';

const PokemonsHomeScreen = () => {
    const { allPokemons, isSuccess, isFetching, isLoading, loadMorePokemons } = useGetPaginatedPokemons();

    const ListFooterComponent = useMemo(
        () => (isFetching ? <AppLoading color={'primary'} style={{ marginVertical: 8 }} /> : null),
        [isFetching],
    );

    return (
        <View>
            {isLoading && <Text>Loading...</Text>}
            {isSuccess && (
                <FlatList
                    data={allPokemons}
                    renderItem={({ item }) => (
                        <PokemonsCard
                            name={item.name}
                            image={item.image}
                            types={item.types}
                            onPress={() => navigateTo('PokemonsDetailsScreen', { url: item.url })}
                        />
                    )}
                    keyExtractor={(item) => `${item.id}-${item.name}`}
                    onEndReached={loadMorePokemons}
                    onEndReachedThreshold={0.5}
                    numColumns={2}
                    ListFooterComponent={ListFooterComponent}
                />
            )}
        </View>
    );
};

export default PokemonsHomeScreen;

const styles = StyleSheet.create({});
