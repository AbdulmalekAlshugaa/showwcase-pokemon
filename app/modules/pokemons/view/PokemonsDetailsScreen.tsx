import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import PokemonDetailWrapper from '@/app/components/PokemonDetailWrapper';
import { Badge } from 'react-native-paper';
import { COLORS, POKEMON_TYPE_COLORS, SIZES, TYPOGRAPHY } from '../../main/src/constants';
import AppBoldText from '@/app/components/AppBoldText';
import AppBodyText from '@/app/components/AppBodyText';
import AppBadge from '@/app/components/AppBadge';
import AppSection from '@/app/components/AppSection';
import AppInformation from '@/app/components/AppInformation';
import AppStatistic from '@/app/components/AppStatistic';

const PokemonsDetailsScreen = ({ route }) => {
    const { item } = route.params;
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.container}>
                <PokemonDetailWrapper isLoading={isLoading} image={item?.image}>
                    <AppBoldText numberOfLines={1} variant="displaySmall" style={styles.title} title={item.name} />
                    <View style={styles.type}>
                        {item?.types.map((item: any, uri: number) => (
                            <AppBadge color={POKEMON_TYPE_COLORS['bug']} title={item.name} key={uri} />
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
                            colorTheme={POKEMON_TYPE_COLORS['fire']}
                            title={'HP'}
                            value={item?.stats.find(stat => stat.name.toLowerCase() === 'hp')?.base_stat}
                        />
                        <AppStatistic
                            colorTheme={POKEMON_TYPE_COLORS['flying']}
                            title={'Attack'}
                            value={item?.stats.find(stat => stat.name.toLowerCase() === 'attack')?.base_stat || 0}
                        />
                        <AppStatistic
                            colorTheme={POKEMON_TYPE_COLORS['water']}
                            title={'Defense'}
                            value={item?.stats.find(stat => stat.name.toLowerCase() === 'defense')?.base_stat || 0}
                        />
                        <AppStatistic
                            colorTheme={POKEMON_TYPE_COLORS['electric']}
                            title={'Speed'}
                            value={item?.stats.find(stat => stat.name.toLowerCase() === 'speed')?.base_stat || 0}
                        />
                        <AppStatistic
                            colorTheme={POKEMON_TYPE_COLORS['grass']}
                            title={'SP Attack'}
                            value={item?.stats.find(stat => stat.name.toLowerCase() === 'sp. atk')?.base_stat || 0}
                        />
                        <AppStatistic
                            colorTheme={POKEMON_TYPE_COLORS['poison']}
                            title={'SP Defense'}
                            value={item?.stats.find(stat => stat.name.toLowerCase() === 'sp. Def')?.base_stat || 0}
                        />
                    </AppSection>
                </PokemonDetailWrapper>
            </View>
        </>
    );
};

export default PokemonsDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    type: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: SIZES.S_12,
    },
    gap: {
        marginLeft: 10,
    },
    title: {
        marginBottom: 10,
    },
    paragraph: {
        lineHeight: 23,
    },
    information: {
        marginTop: 16,
    },
    section: {
        paddingHorizontal: 15,
    },
});
