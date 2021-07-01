import {RequestMovieDetail} from '@data';
import {Observable} from 'rxjs';
import {SignInResult} from '../entity';

export interface SystemsRepository {
  getUpComing(body: any): Observable<any>;
  getPopular(body: any): Observable<any>;
  getTopRating(body: any): Observable<any>;
  getDetailMovie(body: any): Observable<any>;
  getGalleryMovie(body: RequestMovieDetail): Observable<any>;
  getCredits(body: RequestMovieDetail): Observable<any>;
  getVideo(body: RequestMovieDetail): Observable<any>;
  getRelate(body: RequestMovieDetail): Observable<any>;
  getListGenres(body: any): Observable<any>;
}
