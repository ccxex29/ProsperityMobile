import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const UserInformation = () => {
    return (
        <View style={ styles.userInfo }>
            <Text style={ styles.userName }>USER NAME</Text>
            <Text style={ styles.userId }>11411113312</Text>
            <Text style={ styles.userEducation }>Faculty/Major</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    userInfo: {
        justifyContent: 'flex-start',
        marginHorizontal: 28,
        marginVertical: 52,
    },
    userName: {
        fontSize: 24,
    },
    userId: {
        fontSize: 20,
    },
    userEducation: {
        fontSize: 18,
    },
});

export default UserInformation;
