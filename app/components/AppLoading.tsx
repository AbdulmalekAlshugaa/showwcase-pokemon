import { Theme } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

type LoadingProps = ActivityIndicatorProps & {
    size?: 'small' | 'large';
    color?: keyof Theme['colors'];
};

const AppLoading = ({ size, color, ...rest }: LoadingProps) => {
    return <ActivityIndicator size={size} color={color} {...rest} />;
};

export default AppLoading;
