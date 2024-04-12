import * as React from 'react';
import { KitchenSink } from 'react-native-caracat-kitty';
import { description, version, name } from '../../package.json';
import Button$1 from '../screens/button/$1';

const DemoScreen = () => <></>;

const screens = [
  {
    title: 'Button',
    data: [
      {
        name: '$1',
        slug: 'Button$1',
        getScreen: () => Button$1,
      },
    ],
  },
  {
    title: 'Card',
    data: [
      {
        name: 'Card$1',
        slug: 'card-李娜',
        getScreen: () => DemoScreen,
      },
      {
        name: 'Card$2',
        slug: 'card-王涛',
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
