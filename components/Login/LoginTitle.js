import React from 'react';
import {Text, StyleSheet} from 'react-native';

const LoginTitle = () => {
  return (
    <>
      <Text style={{...styles.loginText}}>Login to</Text>
      <Text style={{...styles.loginText, fontSize: 47, marginBottom: 10}}>
        PROSPERITY
      </Text>
      <Text style={styles.loginSubTitle}>Enter Your Office365 Credentials</Text>
    </>
  );
};

const styles = StyleSheet.create({
  loginText: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Gilroy-ExtraBold',
  },
  loginSubTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Gilroy-Light',
  },
});

export default LoginTitle;
