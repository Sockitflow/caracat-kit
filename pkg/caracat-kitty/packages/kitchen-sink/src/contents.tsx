import React from 'react';
import { View, Text } from 'react-native';
import { Screen } from '../../../src/sections';

const Sink = ({ version, description }) => {
  return (
    <Screen>
      <Screen.header>
        <Text>Sink {version}</Text>
      </Screen.header>
      <Screen.content>
        <Text>Sink {version}</Text>
      </Screen.content>
      <Screen.footer>
        <Text>Sink {version}</Text>
      </Screen.footer>
    </Screen>
  );
};

export default Sink;
