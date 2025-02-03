import { StyleSheet, ViewStyle, TouchableOpacity, PressableProps } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { COLORS } from '../modules/main/src/constants';

interface AppButtonProps extends PressableProps {
    style?: ViewStyle;
    oPress: () => void;
    loading: boolean;
    label: string;
    icon: string;
    mode: 'contained' | 'outlined' | 'text' 
}

const AppButton = (props: AppButtonProps) => {
    const mode = props.mode || 'contained';
    return (
        <TouchableOpacity onPress={props.oPress} style={props.style}>
            <Button
                icon={props.icon}
                style={styles.button}
                loading={props.loading}
                mode={mode}
                onPress={props.oPress}
            >
                {props.label}
            </Button>
        </TouchableOpacity>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
    },
});
