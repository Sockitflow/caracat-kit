import React, { memo, useCallback, useRef } from 'react';
import Overlay from './prerequisites/overlay';
import { Button } from '../../components/button';
import { BottomSheetModal } from 'caracat-react-native-kitty';


const Prerequisites = ({ children, prerequisites }) => {
  const firstTruthyIndex = prerequisites.findIndex(
    prerequisite => !!prerequisite
  );

const bottomSheetRef =  useRef<BottomSheetModal>(null);

  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current!.present();
  }, []);

React.useEffect(() => {
 handlePresentPress()
}, [firstTruthyIndex])


  return (
    <>
      <Button label="Present" onPress={handlePresentPress} />
      <Overlay ref={bottomSheetRef}>
        <>{children[firstTruthyIndex !== -1 && firstTruthyIndex] ?? null}</>
      </Overlay>
    </>
  );
};

Prerequisites['display-name'] = 'prerequisites';

export default Prerequisites;
