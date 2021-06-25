import {createReducer} from '@reduxjs/toolkit';
import {
  setLanguage,
  setSplashLoad,
  setMode,
  getUpComing,
  getUpComingSuccess,
} from '../actions';

export type ModeType = 'production' | 'staging';
export type SystemState = {
  language: string;
  mode: ModeType;
  splashLoad: boolean;
  upComingMovie: any;
};
const INITIAL_STATE: SystemState = {
  language: 'vi',
  mode: 'production',
  splashLoad: false,
  upComingMovie: undefined,
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
    ),
);
