import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Setting.styles';
import { SettingProps} from './types';
import { SettingLogic} from './Setting.logic';
export const Setting: React.FC<SettingProps> = (props) => {
  const {} = props;
  const {} = SettingLogic();
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
    </View>
  )
}