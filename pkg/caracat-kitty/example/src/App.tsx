import * as React from 'react';
import { KitchenSink } from 'react-native-caracat-kitty';
import { description, version, name } from '../../package.json';
import 张伟 from '../screens/button/张伟';

const DemoScreen = () => <></>;

const screens = [
  {
    title: 'Button',
    data: [
      {
        name: '张伟',
        slug: 'button-张伟',
        getScreen: () => 张伟,
      },
    ],
  },
  {
    title: 'Card',
    data: [
      {
        name: '李娜',
        slug: 'card-李娜',
        getScreen: () => DemoScreen,
      },
      {
        name: '王涛',
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
