import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ParamsType} from '@storyboards';

export type SearchNavigationProps = StackNavigationProp<
  ParamsType,
  'Search'
>;

export type SearchRouteProp = RouteProp<ParamsType, 'Search'>;

export type SearchProps = {
  navigation: SearchNavigationProps;
  route: SearchRouteProp;
};

export type SearchReduxSelectionState = {};