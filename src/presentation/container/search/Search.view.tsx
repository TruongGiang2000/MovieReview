import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Search.styles';
import {SearchProps} from './types';
import {SearchLogic} from './Search.logic';
import {TextInput} from 'react-native-gesture-handler';
import {IconImage} from '@components';
import {FILTER_ICON, SEARCH_ICON} from '@assets';
import {ModalFilter} from './modules';
export const Search: React.FC<SearchProps> = (props) => {
  const {} = props;
  const {} = SearchLogic();
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <View style={styles.searchContainer}>
          <TextInput placeholder={'Search...'} placeholderTextColor={'#fff'} />
          <IconImage
            source={SEARCH_ICON}
            containerStyle={styles.iconSearchContainer}
            isTouch={true}
            style={{tintColor: '#fff'}}
          />
        </View>
        <IconImage
          source={FILTER_ICON}
          containerStyle={styles.containerFilter}
          isTouch={true}
          style={styles.iconFilter}
          resizeMode={'contain'}
        />
      </View>
      <ModalFilter />
    </View>
  );
};
