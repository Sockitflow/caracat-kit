import React, { memo } from 'react';
import { Text, View } from 'react-native';

const Header = ({ children }) => {
  return (
    <>{children}</>
  );
};

Header['display-name'] = 'header';


export default Header;
