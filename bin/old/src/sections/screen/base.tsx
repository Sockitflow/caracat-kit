import Footer from './footer';
import Header from './header';
import Content from './content';
import React from 'react'
import Prerequisites from './prerequisites';
import { BottomSheetModalProvider } from 'react-native-caracat-kitty'



';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Fragment } from 'react';
import bottomNavigation from './bottom-navigation';
// import FeatherIcon from 'react-native-vector-icons/Feather';

// prerequisites can be a array of conditions and then screen.prereq can be a component that takes an array of children and each child is a place in the array

// prereq
// array [  [void return boolean , component ]   ]

class screenFactory {
  constructor(children, prerequisites) {
    //  all these constructor values are found within our poral <Screen.header> >
    this.header = children
      ? children.filter(child => child.type['display-name'] === 'header')[0]
      : null;
    //  filter the children and find the child a object[key] called display name and this should be the header ect if there is no header no problem just render nothing
    this.content = children
      ? children.filter(child => child.type['display-name'] === 'content')[0]
      : null;
    this.footer = children
      ? children.filter(child => child.type['display-name'] === 'footer')[0]
      : null;
    this.prerequisites = children
      ? children.filter(child => child.type['display-name'] === 'prerequisites')[0]
      : null;
    this.bottomSheet = children
      ? children.filter(
          child => child.type['display-name'] === 'bottom-sheet'
        )[0]
      : null;
    this.bottomNavigation = children
      ? children.filter(
          child => child.type['display-name'] === 'bottom-navigation'
        )[0]
      : null;
  }
}

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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          {header}
          {content}
          {footer}
        </View>
      </SafeAreaView>
      <>
             {prerequisites && React.cloneElement(prerequisites, { prerequisites: props.prerequisites })}
                     {/* pass in the prereq variable that is a component that contains as children a arrau of pre requistes to show and then also pass in these children filtered from the props so that we can show what one that is equal to true */}
                      {/* Passing props to the component */}
      </>
      {bottomSheet}
      {bottomNavigation}
      {/* <Modal prerequisitePortal={prerequisitePortal} {...props} /> */}
    </BottomSheetModalProvider>
  );
}

// const Modal = ({ prerequisites, prerequisitePortal }) => {
//   if (!prerequisites) {
//     return null;
//   }

//   return (
//     <>
//       {prerequisites.map((condition, index) =>
//         condition ? (
//           <Overlay>
//             <>{prerequisitePortal[index]}</>
//           </Overlay>
//         ) : null
//       )}
//     </>
//   );
// };

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '400',
    color: '#222',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerNotifications: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Avatar */
  avatar: {
    position: 'relative',
  },
  avatarImg: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
  avatarNotification: {
    position: 'absolute',
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#fff',
    top: 0,
    right: -2,
    width: 14,
    height: 14,
    backgroundColor: '#f77171',
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});

Screen['display-name'] = 'screen';

Screen.footer = Footer;
Screen.header = Header;
Screen.content = Content;
Screen.prerequisites = Prerequisites;
Screen.bottomNavigation = bottomNavigation;


export default Screen;
