import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const LoginButton = () => { /* The Custom Login Button */
  return (
    <TouchableOpacity style={ styles.customSignIn }>
      <Text style={ styles.signInText }>Sign In <Icon name={'arrowright'} size={20} /></Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customSignIn: {
    flexDirection: 'row',
    paddingVertical: 0,
    height: 30,
    paddingLeft: 36,
    width: 160,
    backgroundColor: '#AA2C2C',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    marginBottom: 14,
    position: 'relative',
    transform: [
      {
        scaleY: 2,
      },
    ],
  },
  signInText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Gilroy-Light',
    marginRight: 8,
    overflow: 'hidden',
    transform: [
      {
        scaleY: 0.5,
      },
    ],
  },
});

export default LoginButton;
