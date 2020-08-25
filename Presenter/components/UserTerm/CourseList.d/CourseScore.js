import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CourseScore = props => {
    return (
        <View style={ styles.courseScoreListContainer }>
            { props.Scores.map(score => {
                return (
                    <Text style={ styles.courseScoreList }>
                        { score.scoreName }: { score.scoreValue }
                    </Text>
                );
            }) }
        </View>
    );
};

const styles = StyleSheet.create({
    courseScoreListContainer: {
        marginTop: 12,
    },
    courseScoreList: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: 'white',
    },
});

export default CourseScore;
