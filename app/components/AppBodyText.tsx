import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';

interface AppBoldTextProps extends React.ComponentProps<typeof Text> {
    title: string;
    style: StyleProp<TextStyle>;
    variant: VariantProp<string>;
    numberOfLines: number;
}

const AppBodyText = (props: AppBoldTextProps) => {
    return (
        <Text numberOfLines={props.numberOfLines} variant={props.variant} style={[styles.text, props.style]}>
            {props.title}
        </Text>
    );
};

const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-color-literals
    text: {
        color: 'black',
    },
});

export default AppBodyText;
