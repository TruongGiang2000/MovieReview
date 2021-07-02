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

export const getRelate = createAction<RequestMovieDetail>('system/getRelate');
export const getRelateSuccess = createAction<RequestMovieDetail>(
  'systems/getRelateSuccsess',
);
export const getRelateFail = createAction<RequestMovieDetail>(
  'systems/getRelateFail',
);

export const getListGenres = createAction<any>('systems/getListGenres');
export const getListGenresSuccess = createAction<any>(
  'systems/getListGenresSuccess',
);
export const getListGenresFail = createAction<any>('systems/getListGenresFail');

export const getListCountries = createAction('systems/getListCountries');
export const getListCountriesSuccess = createAction<any>(
  'systems/getListCountriesSuccess',
);
export const getListCountriesFail = createAction<any>(
  'systems/getListCountriesFail',
);

export const getFilterMovie = createAction<any>('systems/getFilterMovie');
export const getFilterMovieSuccess = createAction<any>(
  'systems/getFilterMovieSuccess',
);
export const getFilterMovieFail = createAction<any>(
  'systems/getFilterMovieFail',
);
export type SystemsEpicActions = any;
