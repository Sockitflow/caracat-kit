import React from 'react';
import { Card$1 } from '../../../src/card';
import { Center } from '../../../src/stack';

const Button = () => {
  return (
    <Center style={{ flex: 1 }}>
      <Card$1 color="#ff5252" label={'Testing'} />
    </Center>
  );
};

export default Button;
