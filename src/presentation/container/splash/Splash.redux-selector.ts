import {Selector} from 'react-redux';
import {RootStoreState} from '@shared-state';
import {SplashReduxSelectionState} from './types';

export const splashSelector: Selector<
  RootStoreState,
  SplashReduxSelectionState
> = (state) => {
  return {
    mode: state.systems.mode,
    language: state.systems.language,
    upComingMovie: state.systems.upComingMovie,
    popularMovie: state.systems.popularMovie,
    topRatingMovie: state.systems.topRatingMovie,
  };
};
