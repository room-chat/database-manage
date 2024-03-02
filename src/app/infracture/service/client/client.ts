import { Injectable } from '@nestjs/common';
import { ChatLogger } from '../../../../app/utils/logger/logger';
import { IClient } from './client.i';
import * as fs from 'fs';
import { PostgresSerivce } from '../postgres/postgres.service';

@Injectable()
export class ClientService implements IClient {
  constructor(private logger: ChatLogger, private postgresService: PostgresSerivce) {}
  public async query$(sql: string, placeHolder: any): Promise<any> {
    return await this.commonQuery$(sql, placeHolder);
  }

  public async queryByFile$(pathFile: string, placeHolder: any[]) {
    const buffer = fs.readFileSync(pathFile);
    const sql = buffer.toString();
    return await this.commonQuery$(sql, placeHolder);
  }

  public async commonQuery$(sql: string, placeHolder: any) {
    try {
      const data = await this.postgresService.query$(sql, placeHolder);
      return data;
    } catch(e) {
      this.logger.error("Query by file has failure. Something occur");
      throw new Error(e.message);
    }
  }
}
