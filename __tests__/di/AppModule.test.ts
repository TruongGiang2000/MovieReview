import {
  registerDependencies,
  container,
  AppDependencies,
  registerFlyValue,
} from '@di';
import {RxRemoteProvider} from '@core';
import {RemoteAuthenticationDataSource, RemoteSystemsDataSource} from '@data';
import {StoreContainer} from '@shared-state';
import {AuthenticationRepository, SystemsRepository} from '@domain';

describe('Register app dependencies', () => {
  it('register', () => {
    registerDependencies();
    registerFlyValue();
    expect(
      container.resolve<RxRemoteProvider>(AppDependencies.ApiProvider),
    ).toBeDefined();
    expect(
      container.resolve<RemoteAuthenticationDataSource>(
        AppDependencies.RemoteAuthenticationDataSource,
      ),
    ).toBeDefined();
    expect(
      container.resolve<StoreContainer>(AppDependencies.StoreContainer),
    ).toBeDefined();
    expect(
      container.resolve<AuthenticationRepository>(
        AppDependencies.AuthenticationRepository,
      ),
    ).toBeDefined();
    expect(
      container.resolve<RemoteSystemsDataSource>(
        AppDependencies.RemoteAuthenticationDataSource,
      ),
    ).toBeDefined();
    expect(
      container.resolve<SystemsRepository>(AppDependencies.SystemsRepository),
    ).toBeDefined();
  });
});
