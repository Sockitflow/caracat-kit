import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Heading } from 'react-native-caracat-kitty';
import { darkenColor } from '../../packages/darken-color';

type ButtonType = {
  label?: string;
  color?: string;
  disabled?: boolean;
  active?: boolean;
};

export default function Button({
  label,
  color = '#ff8c52',
  disabled = true,
  active = false,
}: ButtonType) {
  const buttonStyles = {
    base: {
      width: '50%',
      backgroundColor: color,
      borderWidth: 5,
      borderColor: darkenColor(color, -10),
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: 20,
    },
    disabled: '',
    active: '',
  };

  const labelStyles = {
    base: {
      fontSize: 30,
      color: '#fff',
    },
    disabled: disabled && {
      color: darkenColor(color, -30),
    },
    active: '',
  };

  const styles = StyleSheet.create({
    label: {
      ...labelStyles.base,
      ...labelStyles.disabled,
    },
    button: {
      ...buttonStyles.base,
      ...buttonStyles.disabled,
    },
  });

  return (
    <View style={styles.button}>
      <Heading style={styles.label}>{label}</Heading>
    </View>
  );
}
