import {SystemsRepository} from '../../repository';
import {inject, injectable} from 'tsyringe';
@injectable()
export class SystemUseCase {
  constructor(
    @inject('SystemsRepository')
    private readonly systemRepository: SystemsRepository,
  ) {}
}
