import React from 'react';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { FAB, FABProps } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

interface FloatingButtonProps extends Omit<FABProps, 'icon'> {
    visible: boolean;
    style?: StyleProp<ViewStyle>;
    icon: IconSource;
    label: string;
    onPress: () => void;
}

const FloatingButton = ({  style, icon, label, onPress }: FloatingButtonProps) => {
    return (
        <FAB
            label={label}
            icon={icon}
            style={[styles.fabStyle, style]}
            onPress={onPress}
        />
    );
};

const styles = StyleSheet.create({
    fabStyle: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default FloatingButton;
