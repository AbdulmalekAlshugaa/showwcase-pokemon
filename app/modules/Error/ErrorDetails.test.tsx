import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ErrorDetails, ErrorDetailsProps } from './ErrorDetails';

describe('ErrorDetails', () => {
    const props: ErrorDetailsProps = {
        error: new Error('Test error'),
        errorInfo: { componentStack: 'Test component stack' } as React.ErrorInfo,
        onReset: jest.fn(),
    };

    test('renders correctly', () => {
        const { getByTestId } = render(<ErrorDetails {...props} />);
        expect(getByTestId('content-container')).toBeTruthy();
    });

    test('calls onReset when the reset button is pressed', () => {
        const { getByTestId } = render(<ErrorDetails {...props} />);
        fireEvent.press(getByTestId('reset-button'));
        expect(props.onReset).toHaveBeenCalled();
    });

    test('displays the error message', () => {
        const { getByTestId } = render(<ErrorDetails {...props} />);
        expect(getByTestId('test-error-messages')).toBeTruthy();
    });
});
