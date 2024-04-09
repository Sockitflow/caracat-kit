import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';


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
const Masked = () => {
  return (
    <MaskedView
      style={{ flex: 1, flexDirection: 'row', height: '100%' }}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Basic Mask
          </Text>
        </View>
      }
    >
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
    </MaskedView>
  );
};

export default Masked;
