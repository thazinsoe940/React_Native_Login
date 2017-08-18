/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/components/Login/Login'
import LoginForm from './src/components/Login/LoginForm'
import { StackNavigator } from "react-navigation";
import ReactCalculator from "./src/components/Caclculator/ReactCalculator"
import Signup from './src/components/Signup/Signup'
import Password from './src/components/Signup/Password'

export default class MyProject extends Component {

  render() {
    const ReactNavigation = StackNavigator({

     Login :{screen: Login},
      LoginForm : { screen: LoginForm },
      Signup: {screen:Signup},
      Password :{screen:Password}
      
    }
  );
    return (
      <View  style={styles.container}>
        <ReactNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008489',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
