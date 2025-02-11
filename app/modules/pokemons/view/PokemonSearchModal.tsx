import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppModal from '../../../components/AppModal';
import { useAppDispatch, useAppSelector } from '../../main/src/configureStore';
import { COLORS, SIZES } from '../../main/src/constants';
import AppSearch from '@/app/components/AppSearch';
import AppButton from '@/app/components/AppButton';
import { pokemoneDetailsThunk } from '../src/pokemoneDetailsThunk';
import { pokemonDetailsSuccessSelector, pokemonDetailsErrorSelector } from '../src/pokemoneDetailsSelectors';
import { navigateTo } from '../../navigation/navigationUtil';
import { PokemonRoute } from '../src/pokemonsRoute';
import AppBodyText from '@/app/components/AppBodyText';

interface PokemonSearchModalProps {
    visible: boolean;
    hideModal: () => void;
}

const PokemonSearchModal = (props: PokemonSearchModalProps) => {
    const dispatch = useAppDispatch();
    const isSuccess = useAppSelector(pokemonDetailsSuccessSelector);
    const isError = useAppSelector(pokemonDetailsErrorSelector);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        setLoading(true);
        const value = searchText;
        dispatch(pokemoneDetailsThunk(value)).finally(() => setLoading(false));
    };

    useEffect(() => {
        if (isSuccess) {
            navigateTo(PokemonRoute.PokemonDetails, { id: searchText, callApi: true });
            props.hideModal();
        }
        if (!isSuccess || isSuccess) {
            setLoading(false);
        }
    }, [isSuccess]);

    const renderSearchBar = () => (
        <View style={styles.searchContainer}>
            <AppSearch
                inputString="hii"
                onCancel={() => {}}
                onFocus={() => {}}
                style={styles.appSearch}
                onChangeText={(text: string) => {
                    setSearchText(text);
                }}
            />
        </View>
    );

    return (
        <AppModal
            maxHeight={SIZES.height / 4}
            contentStyle={styles.contentStyle}
            containerStyle={styles.containerStyle}
            visible={props.visible}
            hideModal={props.hideModal}
        >
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.contentStyle}
                keyboardVerticalOffset={SIZES.height / 4}
            >
                {renderSearchBar()}
                <AppButton loading={loading} icon="tag-search" mode="contained" label="Search" oPress={handleSearch} />

                {isError ? (
                    <AppBodyText title="No Pokemon Found" variant="bodySmall" style={styles.text} numberOfLines={1}>
                        {isError}
                    </AppBodyText>
                ) : null}
            </KeyboardAvoidingView>
        </AppModal>
    );
};

const styles = StyleSheet.create({
    appSearch: {
        backgroundColor: COLORS.lightGrey,
        borderRadius: SIZES.S_8,
        flex: 1,
        marginHorizontal: SIZES.S_5,
        marginVertical: SIZES.S_5,
    },
    containerStyle: {
        backgroundColor: COLORS.black,
    },
    contentStyle: {
        backgroundColor: COLORS.white,
        flex: 1,
        width: SIZES.width,
    },

    searchContainer: {
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    text: {
        color: COLORS.red,
        marginVertical: SIZES.S_5,
        textAlign: 'center',
    },
});

export default PokemonSearchModal;
