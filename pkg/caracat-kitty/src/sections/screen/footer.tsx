import React, { memo } from 'react';
import { Text, View } from 'react-native';

const Footer = ({ children }) => {
  return <View style={{ minHeight: 200 }}>{children}</View>;
};

Footer['display-name'] = 'footer';

export default Footer;
