import React from 'react';
import { Text } from 'react-native';
import ChalkProvider from './provider';
import Animated from 'react-native-reanimated';

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

export const Chalk = ({ children, animated, ...rest }) => {
  const ChalkBase = animated ? Animated.Text : Text;

  return (
    <ChalkProvider>
      <ChalkBase {...rest}>{children}</ChalkBase>
    </ChalkProvider>
  );
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
export const Heading = ({ size = 90, children, style, ...rest }) => {
  const mergedStyle = {
    fontFamily: 'Newake',
    fontSize: size,
    ...style,
  };

  return (
    <Chalk style={mergedStyle} {...rest}>
      {children}
    </Chalk>
  );
};

export const SubHeading = ({ size = 30, children, style, ...rest }) => {
  const mergedStyle = {
    fontFamily: 'Inter-Light',
    fontWeight: 100,
    fontSize: size,
    ...style,
  };

  return (
    <Chalk style={mergedStyle} {...rest}>
      {children}
    </Chalk>
  );
};

export const Subtitle = ({ size = 20, children, style, ...rest }) => {
  const mergedStyle = {
    fontFamily: 'Inter-Bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    lineHeight: 24,
    // color: '#FFFFFF',
    fontSize: size,
    ...style,
  };
  return (
    <Chalk style={mergedStyle} {...rest}>
      {children.toUpperCase()}
    </Chalk>
  );
};

export const Paragraph = ({ size = 16, children, style, ...rest }) => {
  const mergedStyle = {
    fontFamily: 'Inter-Medium',
    fontSize: size,
    ...style,
  };
  return (
    <Chalk style={mergedStyle} {...rest}>
      {children}
    </Chalk>
  );
};

export const ChipLabel = ({
  color = 'black',
  size = 16,
  children,
  style,
  ...rest
}) => {
  const mergedStyle = {
    fontFamily: 'Inter-SemiBold',
    fontSize: size,
    ...style,
  };
  return (
    <Chalk style={mergedStyle} {...rest}>
      {children}
    </Chalk>
  );
};
