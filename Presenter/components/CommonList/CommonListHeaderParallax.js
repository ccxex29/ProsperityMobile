import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import IconMaterial from 'react-native-vector-icons/dist/MaterialIcons';

const CommonListHeaderParallax = props => {
    return (
        <View style={ styles.screenTitleContainer }>
            <Text style={[ styles.screenTitle, props.headerIsTerm ? { marginBottom: 18 } : { marginBottom: 0 } ]}>{ props.headerTitle }</Text>
            { props.headerIsTerm ?
                <View style={ styles.termSelector }>
                    <Text style={ styles.termSelectorText }>2019/2020 - Odd Semester Term</Text>
                    <IconMaterial name={'keyboard-arrow-down'}
                    color={'white'}
                    size={13}
                    style={{ marginTop: 3, marginLeft: 4 }} />
                </View>
            : null }
        </View>
    );
};

const styles = StyleSheet.create({
    screenTitle: {
        fontFamily: 'Gilroy-ExtraBold',
        letterSpacing: 0,
        color: 'white',
        fontSize: 52,
    },
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
    screenTitleContainer: {
        paddingHorizontal: 48,
        alignItems: 'flex-start',
        paddingBottom: 36,
    },
});

export default CommonListHeaderParallax;
