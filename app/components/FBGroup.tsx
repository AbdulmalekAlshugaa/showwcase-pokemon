import * as React from 'react';
import { StyleSheet } from 'react-native';

import { FAB, Portal } from 'react-native-paper';

const FABGroupProps = {
    visible: true,
    open: false,
    setOpen: (open: boolean) => {},
    onActionPress: (action: string) => void {},
};

const FBGroup = ({
    visible,
    open,
    setOpen,
    onActionPress,
}: typeof FABGroupProps) => {
    return (
        <Portal>
            <FAB.Group
                open={open}
                icon={open ? 'calendar-today' : 'plus'}
                actions={[
                    { icon: 'plus', onPress: () => onActionPress('add') },
                    { icon: 'tag-search', label: 'Search', onPress: () => onActionPress('search') },
                    { icon: 'logout', label: 'Logout', onPress: () => onActionPress('logout') },
                ]}
                enableLongPressWhenStackOpened
                onStateChange={({ open }: { open: boolean }) => setOpen(open)}
                onPress={() => console.log('FAB Pressed')}
                visible={visible}
            />
        </Portal>
    );
};

FBGroup.title = 'Floating Action Button';

const styles = StyleSheet.create({
    container: {
        padding: 4,
    },
    row: {
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    fab: {
        margin: 8,
    },
    fabVariant: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default FBGroup;
