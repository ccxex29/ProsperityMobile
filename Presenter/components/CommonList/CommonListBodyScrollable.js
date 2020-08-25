import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

const CommonListBodyScrollable = (props) => {
    return (
        <ScrollView style={ styles.screenBodyContainer }>
            { props.children }
            <View style={ styles.bottomPad } />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screenBodyContainer: {
        flex: 1,
        backgroundColor: '#333',
        padding: 24,
    },
    bottomPad: {
        height: 32,
        backgroundColor: 'transparent',
    },
});

export default CommonListBodyScrollable;
