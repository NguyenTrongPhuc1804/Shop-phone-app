import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
const Register = () => {
  return (
    <WebView source={{uri: 'https://reactnative.dev/'}} style={{flex: 1}} />
  );
};

export default Register;
