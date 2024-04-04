import React, { FC } from 'react';
import { BottomSheetModalProvider } from 'caracat-react-native-kitty';

export const withModalProvider = (Component: FC) => () =>
  (
    <BottomSheetModalProvider>
      <Component />
    </BottomSheetModalProvider>
  );
