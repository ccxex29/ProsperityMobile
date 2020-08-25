import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const CommonListBodyScrollable = (props) => {
    return (
        <ScrollView style={ styles.screenBodyContainer }>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screenBodyContainer: {
        flex: 1,
        backgroundColor: '#333',
    },
});

export default CommonListBodyScrollable;
