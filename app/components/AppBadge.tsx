import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import AppBodyText from './AppBodyText';

interface Props {
    color: string;
    title: string;
    style?: StyleProp<ViewStyle>;
}
const AppBadge: FC<Props> = ({ color, title, style }) => {
    return (
        <View style={[styles.badge, { backgroundColor: color }, style]}>
            <AppBodyText style={{}} variant="bodySmall" numberOfLines={1} title={title}>
                {title}
            </AppBodyText>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
    },
});

export default AppBadge;