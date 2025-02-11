/* eslint-disable react-native/no-raw-text */
import AppBodyText from '@/app/components/AppBodyText';
import React, { ErrorInfo } from 'react';
import { SafeAreaView, ScrollView, TextStyle, View, ViewStyle } from 'react-native';
import { COLORS, SIZES } from '../main/src/constants';
import AppButton from '@/app/components/AppButton';

export interface ErrorDetailsProps {
    error: Error;
    errorInfo: ErrorInfo;
    onReset(): void;
}

export function ErrorDetails(props: ErrorDetailsProps) {
    return (
        <SafeAreaView style={$contentContainer}>
            <View style={$topSection}>
                <AppBodyText title={'Error'} variant="bodySmall" numberOfLines={1} style={{}}>
                    {'Error'}
                </AppBodyText>
            </View>

            <ScrollView
                testID="test-error-messages"
                style={$errorSection}
                contentContainerStyle={$errorSectionContentContainer}
            >
                <AppBodyText
                    testID="error-message"
                    title={props.error.message}
                    variant="bodySmall"
                    numberOfLines={1}
                    style={$errorContent}
                >
                    {props.error.message}
                </AppBodyText>
                <AppBodyText
                    testID="error-backtrace"
                    title={props.errorInfo.componentStack || ''}
                    variant="bodySmall"
                    numberOfLines={1}
                    style={$errorBacktrace}
                >
                    {props.errorInfo.componentStack}
                </AppBodyText>
            </ScrollView>
            <AppButton
                testID="reset-button"
                style={$resetButton}
                loading={false}
                mode="contained"
                label="Reset"
                oPress={props.onReset}
                icon={''}
            />
        </SafeAreaView>
    );
}

const $contentContainer: ViewStyle = {
    alignItems: 'center',
    paddingHorizontal: SIZES.S_6,
    paddingTop: SIZES.S_6,
    flex: 1,
};

const $topSection: ViewStyle = {
    flex: 1,
    alignItems: 'center',
};

const $errorSection: ViewStyle = {
    flex: 2,
    backgroundColor: COLORS.lightGrey,
    marginVertical: SIZES.S_4,
    borderRadius: 6,
};

const $errorSectionContentContainer: ViewStyle = {
    padding: SIZES.S_4,
};

const $errorContent: TextStyle = {
    color: COLORS.red,
};

const $errorBacktrace: TextStyle = {
    marginTop: SIZES.S_4,
    color: COLORS.red,
};

const $resetButton: ViewStyle = {
    backgroundColor: COLORS.red,
    paddingHorizontal: SIZES.S_9,
};
