// export { default } from './src/App';

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  'Inter-SemiBoldItalic':
    'https://cdn.jsdelivr.net/gh/hossam1231/caracat-react-native-kitty@main/fonts/fonts-inter/Inter-Black.otf',
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>
          Inter Black
        </Text>
        <Text style={{ fontFamily: 'Inter-SemiBoldItalic', fontSize: 30 }}>
          Inter SemiBoldItalic
        </Text>
        <Text style={{ fontSize: 30 }}>Platform Default</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
