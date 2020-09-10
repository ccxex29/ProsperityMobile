import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardLineSeparator = () => {
    return (
        <View style={ styles.lineStyle } />
    );
};

const styles = StyleSheet.create({
    lineStyle: {
        height: 2,
        flex: 1,
        backgroundColor: '#aaa',
        marginVertical: 10,
    },
});

export default CardLineSeparator;
