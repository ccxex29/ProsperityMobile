import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const LoginButton = () => { /* The Custom Login Button */
  return (
    <TouchableOpacity style={styles.customSignIn}>
      <Text style={styles.signInText}>Sign In</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customSignIn: {
    paddingVertical: 0,
    height: 32,
    paddingLeft: 36,
    width: 150,
    backgroundColor: '#AA2C2C',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    marginBottom: 16,
    position: 'relative',
    // bottom: 0,
    transform: [
      {
        scaleY: 2,
      },
    ],
  },
  signInText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    overflow: 'hidden',
    transform: [
      {
        scaleY: 0.5,
      },
    ],
  },
});

export default LoginButton;
