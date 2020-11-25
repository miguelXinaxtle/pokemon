import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Screens from './src/screens';

export default function Root() {
  return <Screens />;
}

AppRegistry.registerComponent(appName, () => Root);
