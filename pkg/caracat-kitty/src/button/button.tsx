import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Heading } from '../chalk';
import { darkenColor } from '../../packages/darken-color';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

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
  color = '#d152ff',
  disabled = false,
  style = {},
  active = false,
  animated = false,
  onPress = () => {
    return;
  },
  onPressIn = () => {
    return;
  },
  onPressOut = () => {
    return;
  },
  ...rest
}: ButtonType): React.JSX.Element {
  const buttonStyles = StyleSheet.create({
    container: {
      alignItems: 'center',
      ...style,
    },
    base: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.17,
      shadowRadius: 3.05,
      elevation: 4,
      //
      backgroundColor: color,
      borderWidth: 5,
      // borderColor: darkenColor(color, -10),
      height: 50,
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: 20,
    },
  });

  const labelStyles = StyleSheet.create({
    base: {
      fontSize: 30,
      color: '#fff',
    },
    disabled: {
      color: disabled ? darkenColor(color, -30) : '#fff',
    },
  });

  const borderColor = useSharedValue(darkenColor(color, -25));

  const _onPressIn = () => {
    borderColor.value = withSpring(darkenColor(color, -10));
    onPressIn();
  };

  const _onPressOut = () => {
    borderColor.value = withSpring(darkenColor(color, -25));
    onPressOut();
    onPress();
  };

  return (
    <View style={buttonStyles.container} {...rest}>
      <Pressable onPressIn={_onPressIn} onPressOut={_onPressOut}>
        <Animated.View
          style={[
            buttonStyles.base,
            {
              borderColor,
            },
          ]}
        >
          <Heading style={labelStyles.base}>{label}</Heading>
        </Animated.View>
      </Pressable>
    </View>
  );
}

type ButtonType = {
  label?: string;
  color?: string;
  disabled?: boolean;
  active?: boolean;
};
