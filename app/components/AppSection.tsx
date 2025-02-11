import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import AppBodyText from './AppBodyText';

interface Props {
    title: string;
    style?: StyleProp<ViewStyle>;
}
const AppSection: FC<PropsWithChildren<Props>> = ({ children, title, style }) => {
    return (
        <View style={styles.section}>
            <View style={styles.header}>
                <AppBodyText title={title} variant="bodySmall" style={{}} numberOfLines={1}>
                    {title}
                </AppBodyText>
            </View>
            <View style={[styles.body, style]}>{children}</View>
        </View>
    );
};

export default AppSection;

const styles = StyleSheet.create({
    body: {
        marginTop: 10,
    },
    header: {
        paddingHorizontal: 15,
    },
    section: {
        marginBottom: 24,
    },
});
