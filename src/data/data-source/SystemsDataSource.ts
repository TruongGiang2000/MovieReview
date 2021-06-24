import {injectable, inject} from 'tsyringe';
import {RxRemoteProvider} from '@core';


export interface RemoteSystemsDataSource {}

@injectable()
export class ApiSystemsDataSource implements RemoteSystemsDataSource {
  constructor(
    @inject('ApiProvider')
    private readonly provider: RxRemoteProvider,
  ) {}
}
