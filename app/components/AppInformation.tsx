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
            <AppBodyText
                title={value}
                variant="bodySmall"
                numberOfLines={1}
                style={{
                    flex: 1,
                }}
            >
                {value}
            </AppBodyText>
        </View>
    );
};

export default AppInformation;

const styles = StyleSheet.create({
    head: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    dot: {
        textAlign: 'right',
        // paddingRight: 10
    },
});
