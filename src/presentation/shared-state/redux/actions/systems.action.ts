import {RequestMovieDetail} from '@data';
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

export const getPopular = createAction<any>('systems/getPopular');
export const getPopularSuccess = createAction<any>('systems/getPopularSuccess');
export const getPopularFail = createAction<any>('systems/getPopularFail');

export const getTopRating = createAction<any>('systems/getTopRating');
export const getTopRatingSuccess = createAction<any>(
  'systems/getTopRatingSuccess',
);
export const getTopRatingFail = createAction<any>('systems/getTopRatingFail');

export const getDetailMovie = createAction<any>('systems/getDetailMovie');
export const getDetailMovieSuccess = createAction<any>(
  'systems/getDetailMovieSuccess',
);
export const getDetailMovieFail = createAction<any>(
  'systems/getDetailMovieFail',
);

export const getGalleryMovie = createAction<RequestMovieDetail>(
  'systems/getGalleryMovie',
);
export const getGalleryMovieSuccess = createAction<RequestMovieDetail>(
  'systems/getGalleryMovieSuccess',
);
export const getGalleryMovieFail = createAction<RequestMovieDetail>(
  'systems/getGalleryMovieFail',
);

export const getCredits = createAction<RequestMovieDetail>(
  'systems/getCredits',
);
export const getCreditsSuccess = createAction<RequestMovieDetail>(
  'systems/getCreditsSuccess',
);
export const getCreditsFail = createAction<RequestMovieDetail>(
  'systems/getCreditsFail',
);

export const getVideo = createAction<RequestMovieDetail>('systems/getVideo');
export const getVideoSuccess = createAction<RequestMovieDetail>(
  'systems/getVideoSuccess',
);
export const getVideoFail = createAction<RequestMovieDetail>(
  'systems/getVideoFail',
);

export type SystemsEpicActions = any;
