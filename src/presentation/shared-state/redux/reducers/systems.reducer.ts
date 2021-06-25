import {createReducer} from '@reduxjs/toolkit';
import {
  setLanguage,
  setSplashLoad,
  setMode,
  getUpComing,
  getUpComingSuccess,
  getPopular,
  getPopularSuccess,
  getTopRating,
  getTopRatingSuccess,
  getDetailMovie,
  getDetailMovieSuccess,
  getGalleryMovie,
  getGalleryMovieSuccess,
  getCredits,
  getCreditsSuccess,
} from '../actions';

export type ModeType = 'production' | 'staging';
export type SystemState = {
  language: string;
  mode: ModeType;
  splashLoad: boolean;
  upComingMovie: any;
  popularMovie: any;
  topRatingMovie: any;
  detailMovie: any;
  galleryMovie: any;
  creditsMovie: any;
};
const INITIAL_STATE: SystemState = {
  language: 'vi',
  mode: 'production',
  splashLoad: false,
  upComingMovie: undefined,
  popularMovie: undefined,
  topRatingMovie: undefined,
  detailMovie: undefined,
  galleryMovie: undefined,
  creditsMovie: undefined,
};
export const systemsReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(setLanguage, (state, action) =>
      Object.assign(state, {language: action.payload}),
    )
    .addCase(setSplashLoad, (state) => Object.assign(state, {splashLoad: true}))
    .addCase(setMode, (state, action) =>
      Object.assign(state, {mode: action.payload}),
    )
    .addCase(getUpComing, (state) =>
      Object.assign(state, {upComingMovie: undefined}),
    )
    .addCase(getUpComingSuccess, (state, action) =>
      Object.assign(state, {upComingMovie: action.payload?.results}),
    )
    .addCase(getPopular, (state) =>
      Object.assign(state, {popularMovie: undefined}),
    )
    .addCase(getPopularSuccess, (state, action) =>
      Object.assign(state, {popularMovie: action.payload?.results}),
    )
    .addCase(getTopRating, (state) =>
      Object.assign(state, {topRatingMovie: undefined}),
    )
    .addCase(getTopRatingSuccess, (state, action) =>
      Object.assign(state, {topRatingMovie: action.payload?.results}),
    )
    .addCase(getDetailMovie, (state) =>
      Object.assign(state, {detailMovie: undefined}),
    )
    .addCase(getDetailMovieSuccess, (state, action) =>
      Object.assign(state, {detailMovie: action.payload}),
    )
    .addCase(getGalleryMovie, (state) =>
      Object.assign(state, {galleryMovie: undefined}),
    )
    .addCase(getGalleryMovieSuccess, (state, action) =>
      Object.assign(state, {galleryMovie: action.payload}),
    )
    .addCase(getCredits, (state) =>
      Object.assign(state, {creditsMovie: undefined}),
    )
    .addCase(getCreditsSuccess, (state, action) =>
      Object.assign(state, {creditsMovie: action.payload}),
    ),
);
