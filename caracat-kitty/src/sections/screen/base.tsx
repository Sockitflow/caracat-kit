import Footer from './footer';
import Header from './header';
import Content from './content';
import React from 'react';
import Prerequisites from './prerequisites';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Fragment } from 'react';
import bottomNavigation from './bottom-navigation';
import { screenFactory } from './faktory';
import { YStack } from '../../stack';
// import FeatherIcon from 'react-native-vector-icons/Feather';

// prerequisites can be a array of conditions and then screen.prereq can be a component that takes an array of children and each child is a place in the array

// prereq
// array [  [void return boolean , component ]   ]

const Container = (props) => {
  const { children, scroll, space } = props;
  const insets = useSafeAreaInsets();

  const modifiedChildren = <YStack space={space}>{children}</YStack>;

  if (!scroll) {
    return (
      <View
        style={{
          ...props.style,
          paddingBottom: insets.bottom,
          paddingTop: insets.top,
        }}
        {...props}
      >
        {modifiedChildren}
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        ...props.style,
        paddingBottom: insets.bottom,
        paddingTop: insets.top,
      }}
      {...props}
    >
      {modifiedChildren}
    </ScrollView>
  );
};

function Screen(props) {
  const { children } = props;
  const screenInstance = new screenFactory(children, props.prerequisites);
  const {
    header,
    content,
    footer,
    bottomSheet,
    prerequisites,
    modal,
    bottomNavigation,
  } = screenInstance;

  return (
    <BottomSheetModalProvider>
      {/* <SafeAreaView style={{ safeflex: 1, backgroundColor: '#fff' }}> */}
      <Container {...props}>
        {header}
        {content}
        {footer}
      </Container>
      {/* </SafeAreaView> */}
      <>
        {prerequisites &&
          React.cloneElement(prerequisites, {
            prerequisites: props.prerequisites,
          })}
        {/* pass in the prereq variable that is a component that contains as children a arrau of pre requistes to show and then also pass in these children filtered from the props so that we can show what one that is equal to true */}
        {/* Passing props to the component */}
      </>
      {bottomSheet}
      {bottomNavigation}
      {/* <Modal prerequisitePortal={prerequisitePortal} {...props} /> */}
    </BottomSheetModalProvider>
  );
}

// gist.github.com/hossam1231/88e062b338e3bdda8b5e259ff6656b57

Screen['display-name'] = 'screen';

Screen.footer = Footer;
Screen.header = Header;
Screen.content = Content;
Screen.prerequisites = Prerequisites;
Screen.bottomNavigation = bottomNavigation;

export default Screen;
