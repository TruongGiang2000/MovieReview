import {App} from '@resources';
import React from 'react';
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
