import React from 'react';
import { Text } from 'react-native';
import ChalkProvider from './provider';

const Chalk = ({ children, style }) => {
  //  this will have
  return (
    <ChalkProvider>
      <Text style={{ fontFamily: 'Newake', fontSize: 30, ...style }}>
        {children}
      </Text>
    </ChalkProvider>
  );
};

export const Heading = ({ children, style, ...rest }) => {
  const mergedStyle = { fontSize: 90, ...style };
  return <Chalk style={mergedStyle} {...rest}>{children}</Chalk>;
};
export default Chalk;
