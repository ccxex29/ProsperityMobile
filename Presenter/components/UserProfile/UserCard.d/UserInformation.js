import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const UserInformation = () => {
    return (
        <View style={ styles.userInfo }>
            <Text style={ styles.userName }>MR FOO BAR</Text>
            <Text style={ styles.userId }>11411113312</Text>
            <Text style={ styles.userEducation }>Computer Science</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    userInfo: {
        justifyContent: 'center',
        marginHorizontal: 24,
        marginRight: 96,
    },
    userName: {
        fontSize: 24,
        fontFamily: 'Montserrat-Bold',
    },
    userId: {
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',
    },
    userEducation: {
        fontSize: 18,
        fontFamily: 'Montserrat-Light',
    },
});

export default UserInformation;
