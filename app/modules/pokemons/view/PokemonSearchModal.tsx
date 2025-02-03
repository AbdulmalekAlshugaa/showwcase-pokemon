import { View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppModal from '../../../components/AppModal';
import { useAppDispatch, useAppSelector } from '../../main/src/configureStore';
import { COLORS, SIZES } from '../../main/src/constants';
import AppSearch from '@/app/components/AppSearch';
import AppButton from '@/app/components/AppButton';
import { Button } from 'react-native-paper';
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
    }, [isSuccess ]);

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
            {renderSearchBar()}
            <AppButton loading={loading} icon="tag-search" mode="contained" label="Search" oPress={handleSearch} />

            {isError ? (
                <AppBodyText
                    title="No Pokemon Found"
                    variant="bodySmall"
                    style={{ textAlign: 'center', color: COLORS.red, marginVertical: SIZES.S_5 }}
                    numberOfLines={1}
                >
                    {isError}
                </AppBodyText>
            ) : null}
        </AppModal>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: COLORS.black,
    },
    contentStyle: {
        width: SIZES.width,
        backgroundColor: COLORS.white,
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        paddingVertical: 10,
    },
    headerContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // padding: 10,
    },
    appSearch: {
        marginVertical: SIZES.S_5,
        marginHorizontal: SIZES.S_5,
        borderRadius: SIZES.S_8,
        backgroundColor: COLORS.lightGrey,
        flex: 1,
    },
    button: {
        backgroundColor: COLORS.primary,
    },
});

export default PokemonSearchModal;
