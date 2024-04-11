import { useAnimatedStyle } from 'react-native-reanimated';
import { useMemo } from 'react';

function useStyleAnimations(animated, styles) {
  const animatedStyle = useAnimatedStyle(() => {
    return { ...styles };
  });

  return useMemo(() => {
    return animated ? animatedStyle : styles;
  }, [animated, animatedStyle, styles]);
}

export default useStyleAnimations;
