import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import IconMaterial from 'react-native-vector-icons/dist/MaterialIcons';
import TermSelector from '../UserTerm/TermSelector';

const CommonListHeaderParallax = props => {
    return (
        <View style={ styles.screenTitleContainer }>
            <Text
                style={[
                    styles.screenTitle,
                    props.headerIsMain ? { marginBottom: 0, marginTop: 18 } : { marginBottom: 18 },
                ]}>
                { props.headerTitle }
            </Text>
            { !props.headerIsMain ?
                <TermSelector /> : null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    screenTitle: {
        fontFamily: 'Gilroy-ExtraBold',
        letterSpacing: 0.25,
        color: 'white',
        fontSize: 52,
    },
    screenTitleContainer: {
        paddingHorizontal: 48,
        alignItems: 'flex-start',
        paddingBottom: 36,
    },
});

export default CommonListHeaderParallax;
