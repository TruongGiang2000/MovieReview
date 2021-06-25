import {SystemUseCase} from '@domain';
import {container} from 'tsyringe';
import {AppDependencies} from './type';

export function registerUseCase() {
  container.register(AppDependencies.SystemsUseCase, {
    useClass: SystemUseCase,
  });
}
