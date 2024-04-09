import * as React from 'react';
import { BlurView } from 'expo-blur';

import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-caracat-kitty';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button label={'continue'} />
    </SafeAreaView>
  );
}
