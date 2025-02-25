import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import PokemonDetailWrapper from '@/app/components/PokemonDetailWrapper';
import { POKEMON_TYPE_COLORS, SIZES } from '../../main/src/constants';
import AppBoldText from '@/app/components/AppBoldText';
import AppBadge from '@/app/components/AppBadge';
import AppSection from '@/app/components/AppSection';
import AppInformation from '@/app/components/AppInformation';
import AppStatistic from '@/app/components/AppStatistic';
import { useAppDispatch, useAppSelector } from '../../main/src/configureStore';
import { pokemoneDetailsThunk } from '../src/pokemoneDetailsThunk';
import { cleanUp } from '../src/pokemonsDetailsSlice';
import {
    pokemonDetailsLoadingSelector,
    pokemonDetailsSelector,
    pokemonDetailsSuccessSelector,
} from '../src/pokemoneDetailsSelectors';

interface PokemonsDetailsScreenProps {
    route: {
        params: {
            id: string;
            callApi: boolean;
        };
    };
}

const PokemonsDetailsScreen = (route: PokemonsDetailsScreenProps) => {
    const { id, callApi } = route.route.params;
    const dispatch = useAppDispatch();
    const item = useAppSelector(pokemonDetailsSelector);
    const isSuccess = useAppSelector(pokemonDetailsSuccessSelector);
    const isLoading = useAppSelector(pokemonDetailsLoadingSelector);

    useEffect(() => {
        const value = id;
        if (callApi) {
            dispatch(pokemoneDetailsThunk(value));
        }
        return () => {
            dispatch(cleanUp());
        };
    }, [dispatch]);

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />

            {isSuccess && !isLoading ? (
                <View style={styles.container}>
                    <PokemonDetailWrapper image={item?.image}>
                        <AppBoldText numberOfLines={1} variant="displaySmall" style={styles.title} title={item?.name} />
                        <View style={styles.type}>
                            {item?.types.map((item: { name: string }, uri: number) => (
                                <AppBadge color={POKEMON_TYPE_COLORS.bug} title={item.name} key={uri} />
                            ))}
                        </View>
                        <AppSection title="Information" style={styles.section}>
                            <Text style={styles.paragraph}>{item?.description}</Text>
                            <View style={styles.information}>
                                <AppInformation title="Weight" value={`${item?.weight} KG`} />
                                <AppInformation title="Height" value={`${item?.height.toString()} M`} />
                                <AppInformation
                                    title="Abilities"
                                    value={`${item?.abilites.map(ab => ab.name).join(', ')}`}
                                />
                                <AppInformation title="Specie" value={`${item?.genera}`} />
                            </View>
                        </AppSection>
                        <AppSection title="Statistic Basic" style={styles.section}>
                            <AppStatistic
                                colorTheme={POKEMON_TYPE_COLORS.fire}
                                title={'HP'}
                                value={item?.stats.find(stat => stat.name.toLowerCase() === 'hp')?.base_stat || 0}
                            />
                            <AppStatistic
                                colorTheme={POKEMON_TYPE_COLORS.flying}
                                title={'Attack'}
                                value={item?.stats.find(stat => stat.name.toLowerCase() === 'attack')?.base_stat || 0}
                            />
                            <AppStatistic
                                colorTheme={POKEMON_TYPE_COLORS.water}
                                title={'Defense'}
                                value={item?.stats.find(stat => stat.name.toLowerCase() === 'defense')?.base_stat || 0}
                            />
                            <AppStatistic
                                colorTheme={POKEMON_TYPE_COLORS.electric}
                                title={'Speed'}
                                value={item?.stats.find(stat => stat.name.toLowerCase() === 'speed')?.base_stat || 0}
                            />
                            <AppStatistic
                                colorTheme={POKEMON_TYPE_COLORS.grass}
                                title={'SP Attack'}
                                value={item?.stats.find(stat => stat.name.toLowerCase() === 'sp. atk')?.base_stat || 0}
                            />
                            <AppStatistic
                                colorTheme={POKEMON_TYPE_COLORS.poison}
                                title={'SP Defense'}
                                value={item?.stats.find(stat => stat.name.toLowerCase() === 'sp. Def')?.base_stat || 0}
                            />
                        </AppSection>
                    </PokemonDetailWrapper>
                </View>
            ) : null}
        </>
    );
};

export default PokemonsDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    information: {
        marginTop: 16,
    },
    paragraph: {
        lineHeight: 23,
    },
    section: {
        paddingHorizontal: 15,
    },
    title: {
        marginBottom: 10,
    },
    type: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: SIZES.S_12,
    },
});
