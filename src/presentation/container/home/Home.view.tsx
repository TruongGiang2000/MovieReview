import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Home.styles';
import {HomeProps} from './types';
import {HomeLogic} from './Home.logic';
import {translate} from '@helpers';
import {IconSVG} from '@components';

export const Home: React.FC<HomeProps> = (props) => {
  const {} = props;
  const {} = HomeLogic();

  return (
    <View style={styles.container}>
      <IconSVG name={'logo'} size={200} />
      <Text>{translate('welcome')}</Text>
    </View>
  );
};
