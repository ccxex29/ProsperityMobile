import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LoginTitle = () => { /* Prosperity Text Title */
    return (
        <>
            <Text style={ styles.loginText }>Login to</Text>
            <Text style={ styles.loginAppName }>PROSPERITY</Text>
            <Text style={ styles.loginSubTitle }>Enter Your Office365 Credentials</Text>
        </>
    );
};

const styles = StyleSheet.create({
    loginText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    },
    loginAppName: {
        color: 'white',
        fontSize: 48,
        marginBottom: 10,
        fontFamily: 'Montserrat-ExtraBold',
    },
    loginSubTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-Light',
    },
});

export default LoginTitle;
