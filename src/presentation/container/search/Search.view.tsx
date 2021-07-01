import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Search.styles';
import {SearchProps} from './types';
import {SearchLogic} from './Search.logic';
import {TextInput} from 'react-native-gesture-handler';
import {IconImage} from '@components';
import {FILTER_ICON, SEARCH_ICON} from '@assets';
export const Search: React.FC<SearchProps> = (props) => {
  const {} = props;
  const {} = SearchLogic();
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <View style={styles.searchContainer}>
          <TextInput placeholder={'Search...'} />
          <IconImage
            source={SEARCH_ICON}
            containerStyle={styles.iconSearchContainer}
            isTouch={true}
          />
        </View>
        <IconImage source={FILTER_ICON} />
      </View>
    </View>
  );
};
