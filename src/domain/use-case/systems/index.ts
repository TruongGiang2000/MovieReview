import {SystemsRepository} from '../../repository';
import {inject, injectable} from 'tsyringe';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
@injectable()
export class SystemUseCase {
  constructor(
    @inject('SystemsRepository')
    private readonly systemRepository: SystemsRepository,
  ) {}
  getUpcoming(body: any): Observable<any> {
    return this.systemRepository
      .getUpComing(body)
      .pipe(mergeMap((result: any) => of(result)));
  }
  getPopular(body: any): Observable<any> {
    return this.systemRepository
      .getPopular(body)
      .pipe(mergeMap((result: any) => of(result)));
  }
  getTopRating(body: any): Observable<any> {
    return this.systemRepository
      .getTopRating(body)
      .pipe(mergeMap((result: any) => of(result)));
  }
}
