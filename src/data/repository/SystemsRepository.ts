import {inject, injectable} from 'tsyringe';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {SystemsRepository} from '@domain';

import {ApiSystemsDataSource} from '../data-source';

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
}
