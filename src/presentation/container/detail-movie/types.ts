import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ParamsType} from '@storyboards';

export type DetailMovieNavigationProps = StackNavigationProp<
  ParamsType,
  'DetailMovie'
>;

export type DetailMovieRouteProp = RouteProp<ParamsType, 'DetailMovie'>;

export type DetailMovieProps = {
  navigation: DetailMovieNavigationProps;
  route: DetailMovieRouteProp;
};

export type DetailMovieReduxSelectionState = {
  detailMovie: any;
  galleryMovie: any;
  creditsMovie: any;
  videoMovie: any;
  relateMovie: any;
};
