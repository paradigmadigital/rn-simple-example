import React from 'react';

import FirstScreen from './src/components/FirstScreen';
import SecondScreen from './src/components/SecondScreen';

import { createStackNavigator } from 'react-navigation';


const RootStack = createStackNavigator({
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen },
},
{
  initialRouteName: 'First',
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
