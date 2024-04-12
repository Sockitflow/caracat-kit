import React, { memo } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { ButtonBase } from './base';
import { Label } from '../label';

interface ButtonProps {
  label: string;
  labelStyle?: TextStyle;
  style?: ViewStyle;
  onPress: () => void;
}

const ButtonComponent = ({
  label,
  labelStyle,
  style,
  onPress,
}: ButtonProps) => (
  <ButtonBase containerStyle={style} onPress={onPress}>
    <Label style={labelStyle}>{label}</Label>
  </ButtonBase>
);

export const Button = memo(ButtonComponent);
