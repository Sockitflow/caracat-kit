import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ShowcaseApp } from '@gorhom/showcase-template';
import { version, description, nickname } from '../../package.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { rnktScreens as defaultScreens } from '../app/src/screens';

const author = {
  username: 'Hossam sulleman',
  url: 'mailto:hossamsulleman@gmail.com',
};

interface AppProps {
  screens?: any[];
}

export const App = ({ screens: providedScreens }: AppProps) => {
  const screens = useMemo(
    () => [...defaultScreens, ...(providedScreens ? providedScreens : [])],
    [providedScreens]
  );
  return (
    <GestureHandlerRootView style={styles.container}>
      <ShowcaseApp
        name={nickname}
        description={description}
        version={version}
        author={author}
        data={screens}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
});
