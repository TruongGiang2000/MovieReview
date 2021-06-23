import {Selector} from 'react-redux';
import {RootStoreState} from '@shared-state';
import { SearchReduxSelectionState} from './types';

export const SearchSelector: Selector<RootStoreState, SearchReduxSelectionState> = (
  state,
) => {
  return {};
};
