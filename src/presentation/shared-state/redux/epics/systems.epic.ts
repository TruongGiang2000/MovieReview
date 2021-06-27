import {Epic, combineEpics} from 'redux-observable';
import {container} from 'tsyringe';
import {of, concat} from 'rxjs';
import {filter, catchError, switchMap, map} from 'rxjs/operators';

import {AppDependencies} from '@di';

import {
  getDetailMovie,
  getDetailMovieFail,
  getDetailMovieSuccess,
  getGalleryMovie,
  getGalleryMovieFail,
  getGalleryMovieSuccess,
  getPopular,
  getPopularFail,
  getPopularSuccess,
  getTopRating,
  getTopRatingFail,
  getTopRatingSuccess,
  getUpComing,
  getUpComingFail,
  getUpComingSuccess,
  getCredits,
  getCreditsSuccess,
  getCreditsFail,
  getVideo,
  getVideoSuccess,
  getVideoFail,
} from '../actions';
import {SystemUseCase} from '@domain';
const getUpComingEpic$ = (actions$: any) =>
  actions$.pipe(
    filter(getUpComing.match),
    switchMap((action: any) => {
      let useCase = container.resolve<SystemUseCase>(
        AppDependencies.SystemsUseCase,
      );
      return useCase.getUpcoming(action.payload).pipe(
        map(getUpComingSuccess),
        catchError((error) => of(getUpComingFail(error))),
      );
    }),
  );
const getPopularEpic$ = (actions$: any) =>
  actions$.pipe(
    filter(getPopular.match),
    switchMap((action: any) => {
      let useCase = container.resolve<SystemUseCase>(
        AppDependencies.SystemsUseCase,
      );
      return useCase.getPopular(action.payload).pipe(
        map(getPopularSuccess),
        catchError((error) => of(getPopularFail(error))),
      );
    }),
  );

const getTopRatingEpic$ = (actions$: any) =>
  actions$.pipe(
    filter(getTopRating.match),
    switchMap((action: any) => {
      let useCase = container.resolve<SystemUseCase>(
        AppDependencies.SystemsUseCase,
      );
      return useCase.getTopRating(action.payload).pipe(
        map(getTopRatingSuccess),
        catchError((error) => of(getTopRatingFail(error))),
      );
    }),
  );

const getDetailMovieEpic$ = (action$: any) =>
  action$.pipe(
    filter(getDetailMovie.match),
    switchMap((action: any) => {
      let useCase = container.resolve<SystemUseCase>(
        AppDependencies.SystemsUseCase,
      );
      return useCase.getDetailMovie(action.payload).pipe(
        map(getDetailMovieSuccess),
        catchError((error) => of(getDetailMovieFail(error))),
      );
    }),
  );

const getGalleryMovieEpic$ = (action$: any) =>
  action$.pipe(
    filter(getGalleryMovie.match),
    switchMap((action: any) => {
      let useCase = container.resolve<SystemUseCase>(
        AppDependencies.SystemsUseCase,
      );
      return useCase.getGalleryMovie(action.payload).pipe(
        map(getGalleryMovieSuccess),
        catchError((error) => of(getGalleryMovieFail(error))),
      );
    }),
  );

const getCreditsMovieEpic$ = (action$: any) =>
  action$.pipe(
    filter(getCredits.match),
    switchMap((action: any) => {
      let useCase = container.resolve<SystemUseCase>(
        AppDependencies.SystemsUseCase,
      );
      return useCase.getCredits(action?.payload).pipe(
        map(getCreditsSuccess),
        catchError((error) => of(getCreditsFail(error))),
      );
    }),
  );

const getVideoMovie$ = (action$: any) =>
  action$.pipe(
    filter(getVideo.match),
    switchMap((action: any) => {
      let useCase = container.resolve<SystemUseCase>(
        AppDependencies.SystemsUseCase,
      );
      return useCase.getVideo(action?.payload).pipe(
        map(getVideoSuccess),
        catchError((error) => of(getVideoFail(error))),
      );
    }),
  );
export const systemsEpic = combineEpics(
  getUpComingEpic$,
  getPopularEpic$,
  getTopRatingEpic$,
  getDetailMovieEpic$,
  getGalleryMovieEpic$,
  getCreditsMovieEpic$,
  getVideoMovie$,
);
