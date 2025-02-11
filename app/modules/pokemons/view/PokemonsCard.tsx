import { StyleSheet } from 'react-native';
import React, { memo } from 'react';
import { Card } from 'react-native-paper';
import { COLORS, POKEMON_TYPE_COLORS } from '../../main/src/constants';

interface PokemonsCardProps {
    name: string;
    image: string;
    type: keyof typeof POKEMON_TYPE_COLORS;
    onPress: () => void;
}

const PokemonsCard = ({ name, image, type, onPress }: PokemonsCardProps) => {
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
        backgroundColor: COLORS.black,
        flex: 1,
        margin: 10,
    },
});
export default memo(PokemonsCard);
