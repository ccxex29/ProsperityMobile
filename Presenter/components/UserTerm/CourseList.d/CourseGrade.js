import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CourseGrade = props => {
    return (
        <>
            <Text style={ styles.courseLetterGrade }>{ props.letterGrade }</Text>
            <Text style={ styles.courseNumberGrade }>{ props.numberGrade }</Text>
        </>
    );
};

const styles = StyleSheet.create({
    courseLetterGrade: {
        fontFamily: 'Montserrat-BoldItalic',
        fontSize: 46,
        color: 'white',
    },
    courseNumberGrade: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: 'white',
    },
});

export default CourseGrade;
