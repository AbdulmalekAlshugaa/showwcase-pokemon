import { Animated, StyleSheet, View } from 'react-native';
import React, { FC, useRef, useEffect } from 'react';
import AppBodyText from './AppBodyText';
import { COLORS, SIZES } from '../modules/main/src/constants';

interface Props {
    colorTheme: string;
    title: string;
    value: number;
}
const AppStatistic: FC<Props> = ({ colorTheme, title, value }) => {
    const widthAnimation = useRef(new Animated.Value(0)).current;
    const widthInterpolate = widthAnimation.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
    });

    useEffect(() => {
        const scaleX = Animated.timing(widthAnimation, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: true,
        });
        scaleX.reset();
        scaleX.start();
    }, [value]);

    return (
        <View style={styles.stat}>
            <View style={styles.titleContainer}>
                <AppBodyText
                    title={title}
                    numberOfLines={1}
                    variant="bodySmall"
                    style={[styles.title, { color: colorTheme }]}
                >
                    {title}
                </AppBodyText>
            </View>
            <View style={styles.body}>
                <AppBodyText title={value.toString()} numberOfLines={1} variant="bodySmall" style={styles.value}>
                    {value}
                </AppBodyText>

                <View style={styles.stat}>
                    <View style={styles.slider}>
                        <Animated.View
                            style={[
                                styles.sliderValue,
                                {
                                    width: `${value - 40 < 0 ? 0 : value - 40 > 100 ? 100 : value - 40}%`,
                                    backgroundColor: colorTheme,
                                    transform: [
                                        {
                                            scaleX: widthInterpolate,
                                        },
                                    ],
                                },
                            ]}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    stat: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    titleContainer: {
        width: 100,
        borderRightWidth: 2,
        paddingVertical: 8,
        marginRight: SIZES.S_1,
        borderRightColor: COLORS.lightGrey,
    },
    slider: {
        height: 10,
        width: '100%',
        borderRadius: 150,
        borderRightColor: COLORS.lightGrey,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
    },
    value: {
        width: 40,
    },
    sliderValue: {
        height: 10,
        borderRadius: 150,
    },
    title: {
        paddingRight: 10,
    },
});

export default AppStatistic;