import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Search.styles';
import { SearchProps} from './types';
import { SearchLogic} from './Search.logic';
export const Search: React.FC<SearchProps> = (props) => {
  const {} = props;
  const {} = SearchLogic();
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  )
}