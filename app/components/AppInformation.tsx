/* eslint-disable react-native/no-raw-text */
import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';

import AppBodyText from './AppBodyText';

interface Props {
    title: string;
    value: string;
}
const AppInformation: FC<Props> = ({ title, value }) => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <AppBodyText title={title} variant="bodySmall" numberOfLines={1} style={{}}>
                    {title}
                </AppBodyText>
                <AppBodyText title={value} variant="bodySmall" numberOfLines={1} style={styles.dot}>
                    :
                </AppBodyText>
            </View>
            <AppBodyText title={value} variant="bodySmall" numberOfLines={1} style={styles.bodyText}>
                {value}
            </AppBodyText>
        </View>
    );
};

export default AppInformation;

const styles = StyleSheet.create({
    bodyText: {
        flex: 1,
    },
    container: {
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    dot: {
        textAlign: 'right',
        // paddingRight: 10
    },
    head: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginRight: 10,
        width: 100,
    },
});
