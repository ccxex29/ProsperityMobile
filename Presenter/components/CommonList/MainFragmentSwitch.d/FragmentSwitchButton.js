import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import IconOct from 'react-native-vector-icons/dist/Octicons';
import IconIon from 'react-native-vector-icons/dist/Ionicons';

const FragmentSwitchButton = props => {
    const iconColor = () => {
        return props.state === props.name ? 'white' : '#ccc';
    };
    const bgColor = () => {
        return props.state === props.name && { backgroundColor: '#444' };
    };
    const iconProp = () => {
        return (
            props.name === 'schedule' && <IconOct name={'calendar'} size={28} color={ iconColor() } /> ||
            props.name === 'finance' && <IconIon name={'receipt'} size={28} color={ iconColor() } />
        );
    };
    return (
        <TouchableHighlight
            underlayColor={'rgba(255, 255, 255, .2)'}
            style={[ styles.fragmentSwitcherButton, bgColor(props.name) ]}
            onPress={ () => props.setter(props.name) }>
            { iconProp() }
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    fragmentSwitcherButton: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
});

export default FragmentSwitchButton;
