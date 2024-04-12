import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { YStack } from '../../stack';

const Content = ({ space, children, ...rest }) => {
  return <YStack {...rest}>{children}</YStack>;
  // why does this nee
};

Content['display-name'] = 'content';
Content['uuid'] = '123';

export default Content;
