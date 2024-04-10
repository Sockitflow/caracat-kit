import * as React from 'react';
import { KitchenSink } from 'react-native-caracat-kitty';
import { description, version, name } from '../../package.json';

const DemoScreen = () => <></>;

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
  return (
    <KitchenSink
      version={version}
      description={description}
      screens={screens}
      name={name}
    />
  );
}

// <SafeAreaView style={{ flex: 1 }}>
//   <Button label={'continue'} />
// </SafeAreaView>
