import {Epic, combineEpics} from 'redux-observable';
import {container} from 'tsyringe';
import {of, concat} from 'rxjs';
import {filter, catchError, switchMap, map} from 'rxjs/operators';

import {AppDependencies} from '@di';

import {getUpComing, getUpComingFail, getUpComingSuccess} from '../actions';
import {SystemUseCase} from '@domain';
const getUpComingEpic$ = (actions$: any) =>
  actions$.pipe(
    filter(getUpComing.match),
    switchMap((action: any) => {
      console.log('actionEpic', action);
      let useCase = container.resolve<SystemUseCase>(
        AppDependencies.SystemsUseCase,
      );
      return useCase.getUpcoming(action.payload).pipe(
        map(getUpComingSuccess),
        catchError((error) => of(getUpComingFail(error))),
      );
    }),
  );
export const systemsEpic = combineEpics(getUpComingEpic$);
