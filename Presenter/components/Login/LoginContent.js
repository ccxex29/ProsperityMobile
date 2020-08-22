import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const LoginContent = () => { /* The Login Form */
  return (
    <>
      <Text style={styles.loginLabel}>Email</Text>
      <View style={styles.loginInput}>
        <TextInput style={styles.loginInputText} />
      </View>
      {/*<Text style={styles.loginLabel}>Password</Text>*/}
      {/*<View style={styles.loginInput}>*/}
      {/*  <TextInput style={styles.loginInputText} />*/}
      {/*</View>*/}
    </>
  );
};

const styles = StyleSheet.create({
  loginLabel: {
    color: 'white',
    fontSize: 14,
    marginBottom: 12,
    fontFamily: 'Gilroy-Light',
  },
  loginInput: {
    backgroundColor: 'rgba(255, 255, 255, .7)',
    flexDirection: 'row',
    width: '100%',
    maxHeight: 36,
    marginBottom: 16,
  },
  loginInputText: {
    flex: 1,
  },
});

export default LoginContent;
