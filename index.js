/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name} from './app.json';
let appName = name;
if (Platform.OS == 'macos') {
  appName = 'reportmacosbug';
}

AppRegistry.registerComponent(appName, () => App);
