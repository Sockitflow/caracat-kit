import React, { FC, useCallback, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ShowcaseHeader } from '../../header';
import { ShowcaseFooter } from '../../footer';
import { TileGroup } from '../group';
import { useStyles } from './styles';
import type {
  ShowcaseExampleSectionType,
  ShowcaseExampleType,
} from '../../../types';
import type { ShowcaseTileListProps } from './types';

export const ShowcaseTileList: FC<ShowcaseTileListProps> = ({
  name,
  description,
  version,
  author,
  data: _data,
}) => {
  //#region hooks
  const { navigate } = useNavigation();
  const safeInsets = useSafeAreaInsets();
  //#endregion

  //#region variables
  const data: Array<ShowcaseExampleSectionType> = useMemo(() => {
    // @ts-ignore
    if (_data.length > 0 && _data[0].title === undefined) {
      return [
        {
          title: '',
          data: _data as Array<ShowcaseExampleType>,
        },
      ];
    } else {
      return _data as Array<ShowcaseExampleSectionType>;
    }
  }, [_data]);
  //#endregion

  //#region styles
  const styles = useStyles(safeInsets.bottom);
  //#endregion

  //#region callbacks
  const handleOnPress = useCallback((slug: string) => {
    requestAnimationFrame(() => {
      navigate(slug as never);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  //#region renders
  const renderHeader = () => {
    return (
      <ShowcaseHeader name={name} description={description} version={version} />
    );
  };
  const renderFooter = () => {
    return <ShowcaseFooter {...author} />;
  };
  const renderItem = ({
    item,
    index,
  }: {
    item: ShowcaseExampleSectionType;
    index: number;
  }) => {
    return (
      <TileGroup
        key={`group-#${index}-${item.title}`}
        onPress={handleOnPress}
        {...item}
      />
    );
  };
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      stickyHeaderIndices={[0]}
      keyExtractor={item => item.title}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      ItemSeparatorComponent={renderSeparator}
    />
  );
  //#endregion
};
