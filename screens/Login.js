import React from 'react';
import {
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import CirclesBg from '../components/Login/CirclesBg';
import LoginTitle from '../components/Login/LoginTitle';
import LoginContent from '../components/Login/LoginContent';
import LoginButton from '../components/Login/LoginButton';

const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <StatusBar backgroundColor={'transparent'} translucent />
        <View style={styles.loginPage}>
          <View style={styles.circlePos}>
            <CirclesBg />
          </View>
          <View style={styles.loginTitle}>
            <LoginTitle />
          </View>
          <View style={styles.loginContent}>
            <LoginContent />
          </View>
          <LoginButton />
        </View>
      </>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    backgroundColor: '#007388',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  loginTitle: {
    marginHorizontal: 30,
    alignSelf: 'flex-start',
    marginBottom: 80,
    zIndex: 3,
  },
  loginContent: {
    marginHorizontal: 30,
    marginBottom: 80,
    alignItems: 'flex-start',
  },
  circlePos: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default Login;
