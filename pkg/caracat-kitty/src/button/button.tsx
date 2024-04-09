import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { Heading } from '../chalk';
import { darkenColor } from '../../packages/darken-color';

const Touchable =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

type ButtonType = {
  label?: string;
  color?: string;
  disabled?: boolean;
  active?: boolean;
};

/**
 * Cards contain content and actions about a single subject.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the card.
 *
 * @property {ReactElement | (ViewProps) => ReactElement} header - Function component
 * to render above the content.
 *
 * @property {ReactElement | (ViewProps) => ReactElement} footer - Function component
 * to render below the content.
 *
 * @property {ReactElement | (ViewProps) => ReactElement} accent - Function component
 * to render above the card.
 * Accents may change it's color depending on *status* property.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `filled` or `outline`.
 * Defaults to *outline*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example CardSimpleUsage
 * In basic example, card accepts content view as child element.
 *
 * @overview-example CardAccessories
 * It also may have header and footer by configuring `header` and `footer` properties.
 *
 * @overview-example CardStatuses
 */
export default function Button({
  label,
  color = '#ff8c52',
  disabled = false,
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
    <Touchable style={styles.button}>
      <Heading adjustsFontSizeToFit={true} style={styles.label}>
        {label}
      </Heading>
    </Touchable>
  );
}
