import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import DashBoard from './components/DashBoard'
import Transactions from './components/Income';
import SettingsScreen from './components/Settings'
import {DrawerNavigator} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: DashBoard
  },
  Income: {
    screen: Transactions
  }
});

const AppContainer = createAppContainer(AppNavigator);
// const AppDrawerContainer = createAppContainer(AppDrawer);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
   
  }
}

// , <AppDrawerContainer /> 





