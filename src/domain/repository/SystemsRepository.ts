import {Observable} from 'rxjs';
import {SignInResult} from '../entity';

export interface SystemsRepository {
  getUpComing(body: any): Observable<any>;
  getPopular(body: any): Observable<any>;
  getTopRating(body: any): Observable<any>;
}
