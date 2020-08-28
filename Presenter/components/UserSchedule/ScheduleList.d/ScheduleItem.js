import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScheduleDate from './ScheduleDate';
import ScheduleItemCourse from './ScheduleItemCourse';

const ScheduleItem = props => {
    return (
        <View style={ styles.scheduleItemListContainer }>
            <ScheduleDate day={ props.day } date={ props.date } month={ props.month } year={ props.year } />
            <ScheduleItemCourse />
        </View>
    );
};

const styles = StyleSheet.create({
    scheduleItemListContainer: {
        flexDirection: 'row',
        padding: 24,
        backgroundColor: '#666',
        borderRadius: 6,
        marginBottom: 16,
    },
});

export default ScheduleItem;
