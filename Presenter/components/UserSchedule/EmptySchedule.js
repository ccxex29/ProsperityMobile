import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptySchedule = () => {
    return (
        <View style={ styles.emptyScheduleContainer }>
            <Text style={ styles.emptyScheduleMessage }>Your Schedule is empty</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyScheduleContainer: {
        padding: 24 + 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        flex: 1,
    },
    emptyScheduleMessage: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 24,
        color: '#ccc',
    },
});

export default EmptySchedule;
