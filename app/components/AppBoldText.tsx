import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';

interface AppBoldTextProps {
    title: string | number | undefined;
    style: StyleProp<TextStyle>;
    variant: VariantProp<string>;
    numberOfLines: number;
}

const AppBoldText = (props: AppBoldTextProps) => {
    return (
        <Text numberOfLines={props.numberOfLines} variant={props.variant} style={[styles.text, props.style]}>
            {props.title}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
    },
});

export default AppBoldText;
