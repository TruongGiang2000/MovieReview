import {Selector} from 'react-redux';
import {RootStoreState} from '@shared-state';
import { CategoryReduxSelectionState} from './types';

export const CategorySelector: Selector<RootStoreState, CategoryReduxSelectionState> = (
  state,
) => {
  return {};
};
