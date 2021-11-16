import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createButtonTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
  }
}

const TabNavigator = createButtonTabNavigator({
  Facebook:{Screen:FacebookScreen},
  Instagram:{Screen:InstaScreen}
});
const AppContainer = createAppContainer(TabNavigator);