import React from 'react';
import { Text } from 'react-native';
import ChalkProvider from './provider';

const Chalk = ({ children }) => {
  //  this will have
  return (
    <ChalkProvider>
      <Text style={{ fontFamily: 'Inter-SemiBoldItalic', fontSize: 30 }}>
        {children}
      </Text>
    </ChalkProvider>
  );
};

export const Heading = ({ children }) => {
  return <Chalk>{children}</Chalk>;
};

export default Chalk;
