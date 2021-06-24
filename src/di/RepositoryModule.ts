import {container} from 'tsyringe';
import {CombineAuthenticationRepository, CombineSystemsRepository} from '@data';
import {AppDependencies} from './type';

export function registerRepositoryDependencies() {
  container.register(AppDependencies.AuthenticationRepository, {
    useClass: CombineAuthenticationRepository,
  });
  container.register(AppDependencies.SystemsRepository, {
    useClass: CombineSystemsRepository,
  });
}
