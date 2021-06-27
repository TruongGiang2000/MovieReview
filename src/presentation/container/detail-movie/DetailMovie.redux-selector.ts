import {Selector} from 'react-redux';
import {RootStoreState} from '@shared-state';
import {DetailMovieReduxSelectionState} from './types';

export const DetailMovieSelector: Selector<
  RootStoreState,
  DetailMovieReduxSelectionState
> = (state) => {
  return {
    creditsMovie: state.systems.creditsMovie,
    detailMovie: state.systems.detailMovie,
    galleryMovie: state.systems.galleryMovie,
    videoMovie: state.systems.videoMovie,
    relateMovie: state.systems.relateMovie,
  };
};
