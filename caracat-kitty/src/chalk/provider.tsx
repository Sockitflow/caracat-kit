// export { default } from './src/App';

import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default class ChalkProvider extends React.Component {
  state = {
    // fontsLoaded: false,
  };

  defaultInterFonts = {
    'Inter-Black':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-Black.otf',
    'Inter-BlackItalic':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-BlackItalic.otf',
    'Inter-Bold':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-Bold.otf',
    'Inter-BoldItalic':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-BoldItalic.otf',
    'Inter-ExtraBold':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-ExtraBold.otf',
    'Inter-ExtraBoldItalic':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-ExtraBoldItalic.otf',
    'Inter-ExtraLight':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-ExtraLight.otf',
    'Inter-ExtraLightItalic':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-ExtraLightItalic.otf',
    'Inter-Italic':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-Italic.otf',
    'Inter-Light':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-Light.otf',
    'Inter-LightItalic':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-LightItalic.otf',
    'Inter-Medium':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-Medium.otf',
    'Inter-MediumItalic':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-MediumItalic.otf',
    'Inter-Regular':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-Regular.otf',
    'Inter-SemiBold':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-SemiBold.otf',
    'Inter-SemiBoldItalic':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-SemiBoldItalic.otf',
    'Inter-Thin':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-Thin.otf',
    'Inter-ThinItalic':
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-inter/Inter-ThinItalic.otf',
  };

  defaultNewakeFonts = {
    Newake:
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-newake/Newake.otf',
  };

  defaultManropeFonts = {
    Manrope:
      'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/font-manrope/Manrope.ttf',
  };

  async _preventSplashHiding() {
    await SplashScreen.preventAutoHideAsync();
  }

  async _loadFontsAsync() {
    try {
      const defaultFonts = {
        ...this.props.fonts,
        ...this.defaultInterFonts,
        ...this.defaultNewakeFonts,
        ...this.defaultManropeFonts,
      };
      await Font.loadAsync(defaultFonts);
      await SplashScreen.hideAsync();
      // this.setState({ fontsLoaded: true });
    } catch (error) {
      console.error('Error loading fonts', error);
    }
  }

  componentDidMount() {
    this._preventSplashHiding();
    this._loadFontsAsync();
  }

  render() {
    // if (!this.state.fontsLoaded) {
    //   return null;
    // }

    return this.props.children;
  }
}
