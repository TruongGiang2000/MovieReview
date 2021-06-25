import {createAction} from '@reduxjs/toolkit';
import {ModeType} from '../types';
export const setLanguage = createAction<string>('systems/setLanguage');
export const setMode = createAction<ModeType>('systems/setMode');
export const setSplashLoad = createAction('systems/setSplashLoad');

export const getUpComing = createAction<any>('systems/getUpComing');
export const getUpComingSuccess = createAction<any>(
  'systems/getUpComingSuccess',
);
export const getUpComingFail = createAction<any>('systems/getUpComingFail');
export type SystemsEpicActions = any;
