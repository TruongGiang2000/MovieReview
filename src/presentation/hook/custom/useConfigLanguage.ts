import {RootStoreState} from '@shared-state';
import {useMemo} from 'react';
import {useSelector} from 'react-redux';
export const languageRequest = () => {
  const language = useSelector(
    (state: RootStoreState) => state.systems.language,
  );
  const _languageRequest = useMemo(() => {
    return language == 'vi' ? 'vi-VN' : 'en-US';
  }, [language]);
  return _languageRequest;
};
