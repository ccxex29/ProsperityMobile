import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const UserInformation = () => {
    return (
        <View style={ styles.userInfo }>
            <Text style={ styles.userName }>MR FOOZY BAR</Text>
            <Text style={ styles.userId }>11411113312</Text>
            <Text style={ styles.userEducation }>Computer Science</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    userInfo: {
        justifyContent: 'center',
        marginLeft: 24,
        // marginRight: 120,
        flexShrink: 1,
    },
    userName: {
        fontSize: 22,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
    },
    userId: {
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
        color: '#333',
    },
    userEducation: {
        fontSize: 16,
        fontFamily: 'Montserrat-Medium',
        color: '#555',
    },
});

export default UserInformation;
