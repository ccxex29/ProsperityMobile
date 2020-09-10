import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScheduleItemDate from './ScheduleItemDate';
import ScheduleItemCourse from './ScheduleItemCourse';
import CardLineSeparator from '../../CommonList/CardLineSeparator';

const ScheduleItem = props => {
    return (
        <View style={ styles.scheduleItemListContainer }>
            <ScheduleItemDate day={ props.day } date={ props.date } month={ props.month } year={ props.year } />
            <CardLineSeparator />
            {
                props.courseList.map((course, index) => {
                    return (
                        <ScheduleItemCourse
                            courseName={ course.courseName }
                            courseCode={ course.courseCode }
                            courseTime={ course.courseTime }
                            style={ (index !== props.courseList.length - 1) && { marginBottom: 12 } }
                        />);
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    scheduleItemListContainer: {
        flexDirection: 'column',
        padding: 24,
        backgroundColor: '#666',
        borderRadius: 6,
        marginBottom: 24,
    },
});

export default ScheduleItem;
