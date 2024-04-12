import React, { memo } from 'react';
import { Text, View } from 'react-native';

const Content = ({ children }) => {
  return (
    <View style={{ height: 200, backgroundColor: 'black' }}>{children}</View>
  );
};

Content['display-name'] = 'content';

export default Content;
