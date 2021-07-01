import {container} from 'tsyringe';
import {ApiAuthenticationDataSource, ApiSystemsDataSource} from '@data';
import {BearerAuthorizationRxAxiosProvider, BuildConfig} from '@core';
import {AppDependencies} from './type';

export function registerDataDependencies() {
  container.register(AppDependencies.ApiProvider, {
    useValue: new BearerAuthorizationRxAxiosProvider({
      baseURL: BuildConfig.ApiUrl,
    }),
  });
  container.register(AppDependencies.RemoteAuthenticationDataSource, {
    useClass: ApiAuthenticationDataSource,
  });
  container.register(AppDependencies.RemoteSystemsDataSource, {
    useClass: ApiSystemsDataSource,
  });
  container.register(AppDependencies.ApiProviderBasic, {
    useValue: new BearerAuthorizationRxAxiosProvider({
      baseURL: BuildConfig.ApiUriBasic,
    }),
  });
}
