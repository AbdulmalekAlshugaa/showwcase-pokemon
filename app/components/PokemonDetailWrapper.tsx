/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useRef } from 'react';
import { Animated, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View } from 'react-native';

import { COLORS, POKEMON_TYPE_COLORS } from '../modules/main/src/constants';
import { Icon } from 'react-native-paper';

interface PokemonDetailProps {
    image?: string;
    children: React.ReactNode;
    backgroundColor?: typeof POKEMON_TYPE_COLORS;
}

const PokemonDetailWrapper: React.FC<PokemonDetailProps> = ({ image, children, backgroundColor }) => {
    const headerAnimation = useRef(new Animated.Value(0)).current;

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        headerAnimation.setValue(event.nativeEvent.contentOffset.y - 50);
    };

    return (
        <View
            style={[
                styles.flex,
                {
                    backgroundColor: backgroundColor
                        ? POKEMON_TYPE_COLORS[backgroundColor as unknown as keyof typeof POKEMON_TYPE_COLORS]
                        : POKEMON_TYPE_COLORS.normal,
                },
            ]}
        >
            <ScrollView scrollEventThrottle={16} onScroll={onScroll} contentContainerStyle={styles.container}>
                <Icon color={COLORS.white} source="heart" size={30} />
                <View style={styles.spacer} />
                <Image source={require('../../assets/images/wm.png')} style={styles.watermark} />
                {image && <Image source={{ uri: image }} style={styles.img} />}
                <View style={styles.content}>
                    <View style={styles.body}>{children}</View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        marginTop: 80,
    },
    container: {
        paddingBottom: 5,
        paddingHorizontal: 5,
    },
    content: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        flex: 1,
        zIndex: 9,
    },
    flex: {
        flex: 1,
    },
    img: {
        height: 230,
        resizeMode: 'contain',
        width: 230,
    },
    spacer: {
        height: 125,
    },
    watermark: {
        height: 270,
        position: 'absolute',
        resizeMode: 'contain',
        right: 0,
        top: 0,
        width: 270,
        zIndex: 999,
    },
});

export default PokemonDetailWrapper;
