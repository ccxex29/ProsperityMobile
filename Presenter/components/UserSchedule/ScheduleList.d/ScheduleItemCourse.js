import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScheduleItemCourse = props => {
    return (
        <View style={[ props.style ]}>
            <Text style={[ styles.courseText, styles.courseTextTitle ]}>{ props.courseName }</Text>
            <Text style={[ styles.courseText, styles.courseTextTime ]}>{ props.courseTime }</Text>
            <Text style={[ styles.courseText ]}>{ props.courseCode }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    courseText: {
        fontFamily: 'Montserrat-Medium',
        color: '#eee',
    },
    courseTextTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
    },
    courseTextTime: {
        fontSize: 16,
    },
});

export default ScheduleItemCourse;
