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
  getVideo,
  getVideoSuccess,
  getRelate,
  getRelateSuccess,
  getListGenres,
  getListGenresSuccess,
  getListCountries,
  getListCountriesSuccess,
  getFilterMovie,
  getFilterMovieSuccess,
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
  videoMovie: any;
  relateMovie: any;
  movieGenres: any;
  listCountries: any;
  filterMovie: any;
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
  videoMovie: undefined,
  relateMovie: undefined,
  movieGenres: undefined,
  listCountries: undefined,
  filterMovie: undefined,
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
    )
    .addCase(getVideo, (state, action) =>
      Object.assign(state, {videoMovie: undefined}),
    )
    .addCase(getVideoSuccess, (state, action) =>
      Object.assign(state, {videoMovie: action.payload}),
    )
    .addCase(getRelate, (state) =>
      Object.assign(state, {relateMovie: undefined}),
    )
    .addCase(getRelateSuccess, (state, action) =>
      Object.assign(state, {relateMovie: action.payload}),
    )
    .addCase(getListGenres, (state) =>
      Object.assign(state, {movieGenres: undefined}),
    )
    .addCase(getListGenresSuccess, (state, action) =>
      Object.assign(state, {movieGenres: action.payload?.data?.genres}),
    )
    .addCase(getListCountries, (state) =>
      Object.assign(state, {listCountries: undefined}),
    )
    .addCase(getListCountriesSuccess, (state, action) =>
      Object.assign(state, {listCountries: action.payload?.data}),
    )
    .addCase(getFilterMovie, (state) =>
      Object.assign(state, {filterMovie: undefined}),
    )
    .addCase(getFilterMovieSuccess, (state, action) =>
      Object.assign(state, {filterMovie: action.payload}),
    ),
);
