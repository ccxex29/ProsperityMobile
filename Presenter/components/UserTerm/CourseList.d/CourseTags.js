import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CourseTags = props => {
    return (
        <View style={ styles.courseTagsContainer }>
            { props.Tags.map((tag, index) => {
                return (
                    <View
                        style={[
                            styles.courseTag,
                            index !== (props.Tags.length - 1) ? { marginRight: 6 } : { marginRight: 0 },
                            tag.backgroundColor ? { backgroundColor: tag.backgroundColor } : { backgroundColor: '#67898F' },
                            ]}>
                        <Text style={ styles.courseTagText }>{ tag.tagValue }</Text>
                    </View>
                );
            }) }
        </View>
    );
};

const styles = StyleSheet.create({
    courseTagsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        flexWrap: 'wrap',
    },
    courseTag: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginBottom: 4,
    },
    courseTagText: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 11,
    },
});

export default CourseTags;
