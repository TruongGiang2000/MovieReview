import {Selector} from 'react-redux';
import {RootStoreState} from '@shared-state';
import {HomeReduxSelectionState} from './types';

export const HomeSelector: Selector<RootStoreState, HomeReduxSelectionState> = (
  state,
) => {
  return {
    language: state.systems.language,
    upComingMovie: state.systems.upComingMovie,
  };
};
