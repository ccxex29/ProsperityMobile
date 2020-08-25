import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import IconMaterial from 'react-native-vector-icons/dist/MaterialIcons';

const TermSelector = () => {
    return (
        <TouchableHighlight underlayColor={'rgba(0, 0, 0, .2)'} style={{ alignSelf: 'center', borderRadius: 20, }} onPress={() => {}}>
            <View style={ styles.termSelector }>
            <Text style={ styles.termSelectorText }>2019/2020  ·  Odd Semester Term</Text>
            <IconMaterial name={'keyboard-arrow-down'}
                          color={'white'}
                          size={13}
                          style={{ marginTop: 3, marginLeft: 4 }} />
            </View>
        </TouchableHighlight>
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
