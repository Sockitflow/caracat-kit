import React, { FC } from 'react';
import { BottomSheetModalProvider } from 'react-native-caracat-kitty'

';

export const withModalProvider = (Component: FC) => () => (
  <BottomSheetModalProvider>
    <Component />
  </BottomSheetModalProvider>
);
