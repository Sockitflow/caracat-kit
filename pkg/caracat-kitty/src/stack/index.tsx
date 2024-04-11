import { SafeAreaView, View, type ViewStyle } from 'react-native';
import React, { type ReactNode } from 'react';
import type { CSSAttributes } from '../css-attributes';

// `$: -------------------------------------------------------------------------------`
interface XStackProps extends CSSAttributes {
  // we are now using both CSS attributes and also interface defined here
  children: ReactNode[];
  space?: number;
  style: ViewStyle;
}

export const XStack: React.FC<XStackProps> = React.memo(
  ({ children, space = 0, ...props }) => {
    // spreading props has allowed us to use props without specifically naming them all

    const modifiedChildren = React.useMemo(() => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childStyle = child.props.style ? child.props.style : {};
          return React.cloneElement(child, {
            // @ts-ignore
            style: {
              ...childStyle,
              marginHorizontal: space * 10,
              // backgroundColor: 'black',
            },
          });
        }
        return child;
      });
    }, [children, space]);

    return (
      <View style={[props.style, { flexDirection: 'row' }]}>
        {modifiedChildren}
      </View>
    );
  }
);
// `$: -------------------------------------------------------------------------------`
// ^XSTACK

// `$: -------------------------------------------------------------------------------`
interface YStackProps {
  children: ReactNode[];
  space: number | undefined;
  style: ViewStyle;
}
export const YStack: React.FC<YStackProps> = React.memo(
  ({ children, spaceIgnore, safeIgnore, space = 0, style, safe = false }) => {
    // space is default 0
    // console.log(children);

    const modifiedChildren = React.useMemo(() => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            // @ts-ignore
            style: {
              ...child.props.style,
              marginVertical: shouldIgnore(spaceIgnore) ? 0 : space * 10,
            },
          });
        }
        return child;
      });
    }, [children, space, spaceIgnore]);

    const ContainerComponent = shouldIgnore(safeIgnore)
      ? View
      : safe
        ? SafeAreaView
        : View;
    //  if this should be ignored give us a normal view but if this shouldnt be ignored check if its safe

    return (
      <ContainerComponent style={[style, { flexDirection: 'column' }]}>
        {modifiedChildren}
      </ContainerComponent>
    );

    // (
    //   <View >
    //     {modifiedChildren}
    //   </View>
    // );
  }
);
// `$: -------------------------------------------------------------------------------`
// ^YSTACK

// `$: -------------------------------------------------------------------------------`
interface CenterProps {
  children: ReactNode[];
  space?: number;
  style: ViewStyle;
}
export const Center: React.FC<CenterProps> = ({ children, style }) => {
  return (
    <View style={[style, { justifyContent: 'center', alignItems: 'center' }]}>
      {children}
    </View>
  );
};
// `$: -------------------------------------------------------------------------------`
// ^Center

// `$: -------------------------------------------------------------------------------`
interface BaselineProps {
  children: ReactNode[];
  space: number | undefined;
  style: ViewStyle;
}
export const Baseline: React.FC<BaselineProps> = React.memo(
  ({ children, style }) => {
    return (
      <View style={[style, { flex: 1, alignItems: 'center' }]}>{children}</View>
    );
  }
);
// `$: -------------------------------------------------------------------------------`
// ^Baseline

const shouldIgnore = (props) => {
  return props
    ? props[child.type?.uuid] ?? props[child.type?.type] ?? false
    : false;
};
// pass in the conditon if the condiron is not present return false if the conidiiron is present but there is not index thenr reutrn false too

// `$: -------------------------------------------------------------------------------`
interface StackProps {
  children: ReactNode[];
  space: number | undefined;
  style: ViewStyle;
}
export const Stack: React.FC<StackProps> = React.memo(
  ({
    children,
    spaceX = 0,
    spaceY = 0,
    spaceIgnore,
    safeIgnore,
    space = 0,
    style,
    safe = false,
  }) => {
    // space is default 0
    // console.log(children);

    const modifiedChildren = React.useMemo(() => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <View
              style={{
                ...child.props.style,
                marginVertical: shouldIgnore(spaceIgnore) ? 0 : spaceY * 10,
                marginHorizontal: shouldIgnore(spaceIgnore) ? 0 : spaceX * 10,
              }}
            >
              {React.cloneElement(child, {
                // @ts-ignore
              })}
            </View>
          );
        }
        return child;
      });
    }, [children, spaceY, spaceX, spaceIgnore]);

    const ContainerComponent = shouldIgnore(safeIgnore)
      ? View
      : safe
        ? SafeAreaView
        : View;
    //  if this should be ignored give us a normal view but if this shouldnt be ignored check if its safe

    return <ContainerComponent>{modifiedChildren}</ContainerComponent>;
  }
);
// `$: -------------------------------------------------------------------------------`
// ^YSTACK
