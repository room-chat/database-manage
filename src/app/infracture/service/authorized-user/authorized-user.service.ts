import * as path from 'path';
import { Injectable } from "@nestjs/common";
import { ClientService } from "../client/client";

import { ChatLogger } from "../../../../app/utils/logger/logger";
import { IAuthorizedArg, IUserRes } from "./authorized-user.service.i";


@Injectable()
export class AuthorizedUserService {
  private readonly sqlDir = path.join(__dirname, '../../../../asset/sql');

  constructor(private logger: ChatLogger, private client: ClientService){}

  public async get$(param: IAuthorizedArg): Promise<IUserRes>{
    const sqlPath = `${this.sqlDir}/select-user-authorized.sql`;
    const placeHolder = [param.email];

    try {
      const data = await this.client.queryByFile$(
        sqlPath,
        placeHolder
      );

      if(!data){
        return;
      }

      return data as IUserRes;
    } catch(e) {
      this.logger.log('Something error occur', param);

      return;
    }
  }
}