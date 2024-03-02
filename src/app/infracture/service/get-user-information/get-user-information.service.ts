import { Injectable } from '@nestjs/common';
import { ChatLogger } from '../../../../app/utils/logger/logger';
import { ClientService } from '../client/client';
import {
  GetUserInformationParams,
  GetUserInformationRes,
} from './get-user-information.service.i';
import * as path from 'path';

@Injectable()
export class GetUserInformationService {
  public readonly sqlDir = path.join(__dirname, '../../../../asset/sql');
  constructor(
    private logger: ChatLogger,
    private client: ClientService,
  ) {}

  public async getUserInformation(
    param: GetUserInformationParams,
  ): Promise<GetUserInformationRes> {
    const path = `${this.sqlDir}/select-user-information.sql`;
    const placeHolder = [param.email];
    const data = await this.client.queryByFile$(path, placeHolder);

    return data[0];
  }
}
