import * as React from 'react';
import { Text, View } from 'react-native';
import { KitchenSink } from 'react-native-caracat-kitty';

const DemoScreen = () => (
  <View>
    <Text>Demo Screen</Text>
  </View>
);

const screens = [
  {
    title: 'Group 1',
    data: [
      {
        name: 'Default',
        slug: 'default',
        getScreen: () => DemoScreen,
      },
      {
        name: 'Example A',
        slug: 'example-a',
        getScreen: () => DemoScreen,
      },
      {
        name: 'Example B',
        slug: 'example-b',
        getScreen: () => DemoScreen,
      },
    ],
  },
  {
    title: 'Group 2',
    data: [
      {
        name: 'Example C',
        slug: 'example-c',
        getScreen: () => DemoScreen,
      },
      {
        name: 'Example D',
        slug: 'example-d',
        getScreen: () => DemoScreen,
      },
    ],
  },
];

export default function App() {
  return <KitchenSink screens={screens} />;
}

// <SafeAreaView style={{ flex: 1 }}>
//   <Button label={'continue'} />
// </SafeAreaView>
