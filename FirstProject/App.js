import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation'

import SplashScreen from './Components/Screens/SplashScreen';
import LoginScreen from './Components/Screens/LoginScreen';
import RegisterScreen from './Components/Screens/RegisterScreen';
import HomeScreen from './Components/Screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>

    );
  }
}

const AppNavigator = createStackNavigator({
	SplashScreen: {screen: SplashScreen},
  RegisterScreen: {screen: RegisterScreen},
  LoginScreen: {screen: LoginScreen},
  HomeScreen: {screen: HomeScreen},
},{
	headerMode: 'none',
    navigationOptions: {
       headerVisible: false,
    }
});
