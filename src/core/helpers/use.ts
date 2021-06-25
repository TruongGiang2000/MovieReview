import {App} from '@resources';
import {min} from 'lodash';
import React from 'react';
import {translate} from './translate';
export function usePrevious(value: any) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
export const configApiKey = (data: any) => {
  return {api_key: App.apiKey, ...data};
};

export const parseMinuteToHour = (minutes: number) => {
  if (!minutes) return translate('waiting');
  const hour = Math.floor(minutes / 60);
  const _minutes = minutes - hour * 60;
  return hour >= 1 ? `${hour}h${_minutes}m` : `${minutes}m`;
};
