import React, { memo } from 'react';
import { Text, View } from 'react-native';

const Footer = ({ children }) => {
  return (
    <View style={{ height: 200, backgroundColor: 'black' }}>{children}</View>
  );
};

Footer['display-name'] = 'footer';


export default Footer;
