import React, { ReactNode } from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { COLORS, SIZES } from '../modules/main/src/constants';

interface AppModalProps {
    hideModal: () => void;
    visible: boolean;
    containerStyle?: ViewStyle;
    contentStyle?: ViewStyle;
    children?: ReactNode;
    centered?: boolean;
    height?: number | string;
    maxHeight?: number;
}

const AppModal: React.FC<AppModalProps> = ({
    hideModal,
    visible,
    containerStyle,
    contentStyle,
    children,
    centered,
    height,
    maxHeight,
}) => {
    return (
        <Modal
            style={[styles.bottomContainer, centered && containerStyle]}
            onBackButtonPress={hideModal}
            onBackdropPress={hideModal}
            isVisible={visible}
        >
            <View
                style={[
                    styles.wrapper,
                    centered && styles.centerWrapper,
                    contentStyle,
                    height && { height },
                    maxHeight && { maxHeight },
                ]}
            >
                {children}
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    bottomContainer: {
        justifyContent: 'flex-end',
        marginBottom: 0,
        marginHorizontal: 0,
        marginTop: 50,
    },

    centerWrapper: {
        height: null,
        paddingBottom: 0,
    },
    wrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        overflow: 'hidden',
        paddingBottom: 10,
        padding: SIZES.S_5,
    },
});

export default AppModal;
