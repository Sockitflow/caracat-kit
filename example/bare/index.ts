import 'react-native-gesture-handler';

import { enableScreens } from 'react-native-screens';
enableScreens(true);

// @ts-ignore
import { enableLogging } from 'caracal-react-native-kitty';
enableLogging();

import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

LogBox.ignoreLogs(['react-native-maps']);

AppRegistry.registerComponent(appName, () => App);
