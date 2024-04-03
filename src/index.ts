// detail pages
export * from './components/pages/detail';

export * from './components/pages/core';

// export * from './components/sections/pages/core';


// bottom sheet
export { default } from './packages/bottomSheet';

// bottom sheet modal
export { default as BottomSheetModal } from './packages/bottomSheetModal';
export { default as BottomSheetModalProvider } from './packages/bottomSheetModalProvider';

//#region hooks
export { useBottomSheet } from './hooks/useBottomSheet';
export { useBottomSheetModal } from './hooks/useBottomSheetModal';
export { useBottomSheetSpringConfigs } from './hooks/useBottomSheetSpringConfigs';
export { useBottomSheetTimingConfigs } from './hooks/useBottomSheetTimingConfigs';
export { useBottomSheetInternal } from './hooks/useBottomSheetInternal';
export { useBottomSheetModalInternal } from './hooks/useBottomSheetModalInternal';
export { useBottomSheetDynamicSnapPoints } from './hooks/useBottomSheetDynamicSnapPoints';
export { useScrollEventsHandlersDefault } from './hooks/useScrollEventsHandlersDefault';
export { useGestureEventsHandlersDefault } from './hooks/useGestureEventsHandlersDefault';
export { useBottomSheetGestureHandlers } from './hooks/useBottomSheetGestureHandlers';
export { useScrollHandler } from './hooks/useScrollHandler';
export { useScrollableSetter } from './hooks/useScrollableSetter';
//#endregion

//#region components
export {
  BottomSheetScrollView,
  BottomSheetSectionList,
  BottomSheetFlatList,
  BottomSheetVirtualizedList,
} from './packages/bottomSheetScrollable';
export { default as BottomSheetHandle } from './packages/bottomSheetHandle';
export { default as BottomSheetDraggableView } from './packages/bottomSheetDraggableView';
export { default as BottomSheetView } from './packages/bottomSheetView';
export { default as BottomSheetTextInput } from './packages/bottomSheetTextInput';
export { default as BottomSheetBackdrop } from './packages/bottomSheetBackdrop';
export { default as BottomSheetFooter } from './packages/bottomSheetFooter';
export { default as BottomSheetFooterContainer } from './packages/bottomSheetFooterContainer/BottomSheetFooterContainer';

// touchables
import BottomSheetTouchable from './packages/touchables';
export const {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} = BottomSheetTouchable;
// utils
export { createBottomSheetScrollableComponent } from './packages/bottomSheetScrollable';
//#endregion

//#region types
export type { BottomSheetProps } from './packages/bottomSheet';
export type { BottomSheetModalProps } from './packages/bottomSheetModal';
export type { BottomSheetHandleProps } from './packages/bottomSheetHandle';
export type { BottomSheetBackgroundProps } from './packages/bottomSheetBackground';
export type { BottomSheetBackdropProps } from './packages/bottomSheetBackdrop';
export type { BottomSheetFooterProps } from './packages/bottomSheetFooter';

export type {
  BottomSheetFlatListMethods,
  BottomSheetScrollViewMethods,
  BottomSheetSectionListMethods,
  BottomSheetVirtualizedListMethods,
  BottomSheetScrollableProps,
} from './packages/bottomSheetScrollable';

export type {
  ScrollEventsHandlersHookType,
  GestureEventsHandlersHookType,
  ScrollEventHandlerCallbackType,
  GestureEventHandlerCallbackType,
} from './types';
//#endregion

//#region utilities
export * from './constants';
export { enableLogging } from './utilities/logger';
//#endregion
