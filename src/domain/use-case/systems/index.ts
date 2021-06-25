import {SystemsRepository} from '../../repository';
import {inject, injectable} from 'tsyringe';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {RequestMovieDetail} from '@data';
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
  getDetailMovie(body: any): Observable<any> {
    return this.systemRepository
      .getDetailMovie(body)
      .pipe(mergeMap((result: any) => of(result)));
  }
  getGalleryMovie(body: RequestMovieDetail): Observable<any> {
    return this.systemRepository
      .getGalleryMovie(body)
      .pipe(mergeMap((result: any) => of(result)));
  }
  getCredits(body: RequestMovieDetail): Observable<any> {
    return this.systemRepository
      .getCredits(body)
      .pipe(mergeMap((result: any) => of(result)));
  }
}
