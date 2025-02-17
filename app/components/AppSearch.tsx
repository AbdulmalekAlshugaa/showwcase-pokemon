import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { COLORS, SIZES } from '../modules/main/src/constants';

interface AppSearchProps {
    inputString: string;
    onChangeText: (text: string) => void;
    onFocus: () => void;
    onCancel: () => void;
    style: StyleProp<TextStyle & ViewStyle>;
}

const AppSearch = (props: AppSearchProps) => {
    const [inputString, setInputString] = useState('');
    let inputRef: unknown = null;

    const _onChangeText = (text: string) => {
        setInputString(text);
        if (props.onChangeText) {
            props.onChangeText(text);
        }
    };

    const _onFocus = () => {
        if (props.onFocus) {
            props.onFocus();
        }
    };

    return (
        <Searchbar
            onPressIn={() => inputRef.focus()}
            value={inputString}
            style={[styles.container, props.style]}
            inputStyle={styles.searchBar}
            inputMode="text"
            onChangeText={_onChangeText}
            allowFontScaling={true}
            placeholderTextColor={COLORS.gray}
            placeholder={'Search'}
            iconColor={COLORS.primary}
            ref={ref => (inputRef = ref)}
            onFocus={_onFocus}
            textAlign="left"
            clearIcon="close"
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.S_1,
        elevation: SIZES.S_2,
    },
    searchBar: {
        color: COLORS.black,
        fontSize: 14,
        height: 20,
    },
});

export default AppSearch;
