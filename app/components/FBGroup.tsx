import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal } from 'react-native-paper';
import { FABTYPES } from '../modules/pokemons/src/pokemonsConstants';

const FABGroupProps = {
    visible: true,
    open: false,
    setOpen: (open: boolean) => {},
    onActionPress: (action: FABTYPES) => void {},
};

const FBGroup = ({ visible, open, setOpen, onActionPress }: typeof FABGroupProps) => {
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
                visible={visible}
            />
        </Portal>
    );
};

FBGroup.title = 'Floating Action Button';


export default FBGroup;
