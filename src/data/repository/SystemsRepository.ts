import {inject, injectable} from 'tsyringe';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {SystemsRepository} from '@domain';

import {ApiSystemsDataSource} from '../data-source';
import {RequestMovieDetail} from '../model';

@injectable()
export class CombineSystemsRepository implements SystemsRepository {
  constructor(
    @inject('RemoteSystemsDataSource')
    private readonly remoteDataSource: ApiSystemsDataSource,
  ) {}
  getUpComing(body: any): Observable<any> {
    return this.remoteDataSource.getUpComing(body);
  }
  getPopular(body: any): Observable<any> {
    return this.remoteDataSource.getPopular(body);
  }
  getTopRating(body: any): Observable<any> {
    return this.remoteDataSource.getTopRating(body);
  }
  getDetailMovie(body: RequestMovieDetail): Observable<any> {
    return this.remoteDataSource.getDetailMovie(body);
  }
  getGalleryMovie(body: RequestMovieDetail): Observable<any> {
    return this.remoteDataSource.getGalleryMovie(body);
  }
  getCredits(body: RequestMovieDetail): Observable<any> {
    return this.remoteDataSource.getCredits(body);
  }
  getVideo(body: RequestMovieDetail): Observable<any> {
    return this.remoteDataSource.getVideo(body);
  }
}
