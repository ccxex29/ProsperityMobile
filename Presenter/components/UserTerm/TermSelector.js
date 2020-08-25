import React  from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import IconMaterial from 'react-native-vector-icons/dist/MaterialIcons';
import CrossPlatformPicker from '../Compatibility/CrossPlatformPicker';

const TermSelector = props => {
    return (
        <>
            <CrossPlatformPicker
                containerStyle={ styles.termSelector }
                textStyle={ styles.termSelectorText }
            />
        </>
    );
};

const styles = StyleSheet.create({
    termSelector: {
        backgroundColor: 'rgba(0, 0, 0, .2)',
        paddingVertical: 10,
        paddingHorizontal: 16,
        alignSelf: 'center',
        borderRadius: 20,
        flexDirection: 'row',
    },
    termSelectorText: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
    },
});

export default TermSelector;
