/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { createContext, useReducer } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import First from './first'
import Second from './second'
import { GlobalProvider } from './GlobalState'

const MainNavigator = createStackNavigator({
  First: { screen: First },
  Second: { screen: Second },
});

const Container = createAppContainer(MainNavigator);

export default App = () => {
  return (
    <GlobalProvider>
      <Container />
    </GlobalProvider>
  )
}