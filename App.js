/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, TextInput, Animated, View, Text, Easing, TouchableOpacity, Alert } from 'react-native';
import { Login } from './src/components';
import { Provider } from 'react-redux';
import { appStore } from "./src/store";

export default class App extends Component {
 
  render() {
    return (
      <Provider store={appStore}>
      <View style={styles.container}>
        <Login />
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  }
});
