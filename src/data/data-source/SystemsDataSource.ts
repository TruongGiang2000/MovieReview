import {injectable, inject} from 'tsyringe';
import {RxRemoteProvider} from '@core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {App} from '@resources';
import {configApiKey} from '@helpers';
import {RequestMovieDetail} from '../model';

export interface RemoteSystemsDataSource {
  getUpComing(data: any): Observable<any>;
  getPopular(data: any): Observable<any>;
  getTopRating(data: any): Observable<any>;
  getDetailMovie(body: any): Observable<any>;
  getVideo(body: any): Observable<any>;
}

@injectable()
export class ApiSystemsDataSource implements RemoteSystemsDataSource {
  constructor(
    @inject('ApiProvider')
    private readonly provider: RxRemoteProvider,
  ) {}
  getUpComing(body: any): Observable<any> {
    return this.provider
      .get<any>('upcoming', configApiKey(body))
      .pipe(map((response) => response.data));
  }
  getPopular(body: any): Observable<any> {
    return this.provider
      .get<any>('popular', configApiKey(body))
      .pipe(map((response) => response.data));
  }
  getTopRating(body: any): Observable<any> {
    return this.provider
      .get('top_rated', configApiKey(body))
      .pipe(map((response) => response.data));
  }
  getDetailMovie(body: RequestMovieDetail): Observable<any> {
    return this.provider
      .get(`${body?.movieID}`, configApiKey(body))
      .pipe(map((response) => response.data));
  }
  getGalleryMovie(body: RequestMovieDetail): Observable<any> {
    return this.provider
      .get(`${body?.movieID}/images`, configApiKey(body))
      .pipe(map((response) => response.data));
  }
  getCredits(body: RequestMovieDetail): Observable<any> {
    return this.provider
      .get(`${body?.movieID}/credits`, configApiKey(body))
      .pipe(map((response) => response.data));
  }
  getVideo(body: RequestMovieDetail): Observable<any> {
    return this.provider
      .get(`${body?.movieID}/videos`, configApiKey(body))
      .pipe(map((response) => response.data));
  }
}
