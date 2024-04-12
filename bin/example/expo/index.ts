import { registerRootComponent } from 'expo';

import { enableScreens } from 'react-native-screens';
enableScreens(true);

// @ts-ignore
import { enableLogging } from 'caracat-react-native-kitty';
enableLogging();

import App from './src/App';

registerRootComponent(App);
