import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ParamsType} from '@storyboards';

export type CategoryNavigationProps = StackNavigationProp<
  ParamsType,
  'Category'
>;

export type CategoryRouteProp = RouteProp<ParamsType, 'Category'>;

export type CategoryProps = {
  navigation: CategoryNavigationProps;
  route: CategoryRouteProp;
};

export type CategoryReduxSelectionState = {};