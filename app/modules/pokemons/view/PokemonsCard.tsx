import { StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import { Card } from 'react-native-paper';
import { COLORS, POKEMON_TYPE_COLORS } from '../../main/src/constants';
import { PokemonApi } from '../../main/src/services/api/resources/pokemons';

interface PokemonsCardProps {
    name: string;
    image: string;
    type: keyof typeof POKEMON_TYPE_COLORS;
    onPress: () => void;
}

const PokemonsCard = ({ name, image, type, onPress }: PokemonsCardProps) => {
    console.log('PokemonsCardProps',  type);
    return (
        <Card
            style={[
                styles.card,
                {
                    backgroundColor: POKEMON_TYPE_COLORS[type],
                },
            ]}
            onPress={onPress}
        >
            <Card.Cover
                style={{
                    backgroundColor: POKEMON_TYPE_COLORS[type],
                }}
                source={{ uri: image }}
            />
            <Card.Title title={name} />
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        flex: 1,
        backgroundColor: COLORS.black,
    },
});
export default PokemonsCard;
