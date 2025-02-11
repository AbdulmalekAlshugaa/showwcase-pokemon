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
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export default AppBadge;
