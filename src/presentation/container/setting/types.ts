import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ParamsType} from '@storyboards';

export type SettingNavigationProps = StackNavigationProp<
  ParamsType,
  'Setting'
>;

export type SettingRouteProp = RouteProp<ParamsType, 'Setting'>;

export type SettingProps = {
  navigation: SettingNavigationProps;
  route: SettingRouteProp;
};

export type SettingReduxSelectionState = {};