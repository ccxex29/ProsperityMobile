import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScheduleItemDate = props => {
    const monthName = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    return (
        <View style={ styles.scheduleItemDateContainer }>
            <Text style={[ styles.scheduleText, styles.scheduleTextDay ]}>{ props.day.substring(0, 3) }</Text>
            <Text style={[ styles.scheduleText, styles.scheduleTextFullDate ]}>{ monthName[parseInt(props.month) - 1] } { props.date }, { props.year }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    scheduleItemDateContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scheduleText: {
        color: 'white',
    },
    scheduleTextFullDate: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
    },
    scheduleTextDay: {
        fontSize: 28,
        fontFamily: 'Montserrat-Bold',
    },
});

export default ScheduleItemDate;
