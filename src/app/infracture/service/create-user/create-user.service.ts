import { Injectable } from '@nestjs/common';
import { ChatLogger } from '../../../../app/utils/logger/logger';
import { ICreateUser, ICreateResult } from './create-user.service.i';

import * as path from 'path';
import { ClientService } from '../client/client';
import { IStatus } from '../../../../app/utils/constant/constant';

@Injectable()
export class CreateUserService {
  private readonly sqlDir = path.join(__dirname, '../../../../asset/sql');

  constructor(
    private logger: ChatLogger,
    private client: ClientService,
  ) {}

  public async createUser$(param: ICreateUser): Promise<ICreateResult> {
    const path = `${this.sqlDir}/insert-new-user-account.sql`;
    const placeHolder = [
      param.email,
      param.password,
      param.firstName,
      param.lastName,
      param.address,
      param.city,
      param.dayofBirth
    ];

    try {
      const data = await this.client.queryByFile$(path, placeHolder);

      return {
        status: IStatus.SUCCESS,
        email: data
      }
    } catch (e) {
      const resultFailure: ICreateResult = {
        status: IStatus.FAILURE,
        email: param.email
      };

      this.logger.log('Create user failure', param);

      return resultFailure;
    }
  }
}
