import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Category.styles';
import { CategoryProps} from './types';
import { CategoryLogic} from './Category.logic';
export const Category: React.FC<CategoryProps> = (props) => {
  const {} = props;
  const {} = CategoryLogic();
  return (
    <View style={styles.container}>
      <Text>Category</Text>
    </View>
  )
}