import React, { memo, useCallback, useRef } from 'react';
import Overlay from './prerequisites/overlay';
import { Button } from '../../components/button';
import { BottomSheetModal } from 'react-native-caracat-kitty'



';

const Prerequisites = ({ children, prerequisites }) => {
const isPrerequisiteActive = (element) => element == true
const activePrerequisiteIndex = prerequisites.findIndex(isPrerequisiteActive)

console.warn(activePrerequisiteIndex);


  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current!.present();
  }, []);

    const handleDismissPress = useCallback(() => {
    bottomSheetRef.current!.dismiss();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);


  React.useEffect(() => {
    if (activePrerequisiteIndex >= 0) {
    handlePresentPress();
    } else {
    handleDismissPress()
    }
  }, [activePrerequisiteIndex]);

  return (
    <>
      {/* <Button label="Present" onPress={handlePresentPress} /> */}
      <Overlay ref={bottomSheetRef}>
{children[activePrerequisiteIndex]}
        {/* so if the first prereq is active show its place in the portal */}
      </Overlay>
    </>
  );
};

Prerequisites['display-name'] = 'prerequisites';

export default Prerequisites;
