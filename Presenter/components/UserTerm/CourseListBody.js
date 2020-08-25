import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CommonListBodyScrollable from '../CommonList/CommonListBodyScrollable';

const CourseListBody = () => {
    return (
        <CommonListBodyScrollable>
            <View style={ styles.termCourseListContainer }>
                <Text style={ styles.courseName }>SOMEWHAT UNLIKELY AND LENGTHY COURSE NAME UWU</Text>
                <View style={ styles.courseProperties }>
                    <View style={ styles.coursePropertiesLeft }>
                        <View style={ styles.courseTagsContainer }>
                            <View style={[ styles.courseTag, { marginRight: 6, backgroundColor: '#63BECF', color: 'black' } ]}>
                                <Text style={ styles.courseTagText }>ABC0123</Text>
                            </View>
                            <View style={[ styles.courseTag, { backgroundColor: '#67898F' } ]}>
                                <Text style={ styles.courseTagText }>DEF0123</Text>
                            </View>
                        </View>
                        <View style={ styles.courseScoreListContainer }>
                            <Text style={ styles.courseScoreList }>Score 1: 60</Text>
                            <Text style={ styles.courseScoreList }>Score 2: 60</Text>
                            <Text style={ styles.courseScoreList }>Score 3: 60</Text>
                        </View>
                    </View>
                    <View style={ styles.coursePropertiesRight }>
                        <Text style={ styles.courseLetterGrade }>B</Text>
                        <Text style={ styles.courseNumberGrade }>6.0</Text>
                    </View>
                </View>
            </View>
        </CommonListBodyScrollable>
    );
};

const styles = StyleSheet.create({
    termCourseListContainer: {
        padding: 16,
        backgroundColor: '#666',
        borderRadius: 6,
    },
    courseName: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
    },
    courseProperties: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    coursePropertiesLeft: {
        flex: 6,
    },
    coursePropertiesRight: {
        flex: 1,
        minWidth: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    courseTagsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    courseTag: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 10,
    },
    courseTagText: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 11,
    },
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
    courseScoreListContainer: {
        marginTop: 12,
    },
    courseScoreList: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: 'white',
    },
});

export default CourseListBody;
