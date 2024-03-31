import React, { FC } from 'react';
import { BottomSheetModalProvider } from 'caracal-react-native-kitty';

export const withModalProvider = (Component: FC) => () =>
  (
    <BottomSheetModalProvider>
      <Component />
    </BottomSheetModalProvider>
  );
