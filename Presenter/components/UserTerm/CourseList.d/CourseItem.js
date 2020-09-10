import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CourseTags from './CourseTags';
import CourseScore from './CourseScore';
import CourseGrade from './CourseGrade';

const CourseItem = props => {
    return (
        <View style={ styles.termCourseListContainer }>
            <Text style={ styles.courseName }>{ props.courseName }</Text>
            <View style={ styles.courseProperties }>
                <View style={ styles.coursePropertiesLeft }>
                    <CourseTags
                        Tags={ props.Tags }
                    />
                    <CourseScore
                        Scores={ props.Scores }
                    />
                </View>
                <View style={ styles.coursePropertiesRight }>
                    <CourseGrade
                        letterGrade={ props.letterGrade }
                        numberGrade={ props.numberGrade }
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    termCourseListContainer: {
        padding: 16,
        backgroundColor: '#666',
        borderRadius: 6,
        marginBottom: 24,
    },
    courseName: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
    },
    courseProperties: {
        flexDirection: 'row',
    },
    coursePropertiesLeft: {
        flex: 6,
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    coursePropertiesRight: {
        flex: 1,
        minWidth: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});

export default CourseItem;
