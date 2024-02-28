import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { ConfigService } from '../../config/config.service';
import { ChatLogger } from '../../../../app/utils/logger/logger';

@Injectable()
export class PostgresSerivce {
  constructor(
    private logger: ChatLogger,
    private configService: ConfigService,
  ) {}

  async getPool(config: any) {
    return new Pool(config);
  }

  async connection() {
    const config = this.configService.PostgresConfig();
    const pool = this.getPool(config);
    return pool;
  }

  async query$(sql: string, placeHolder: any[]) {
    const start = await this.connection();
    try {
      if (start) {
        const data = await start.query(sql, placeHolder);
        return data.rows;
      }
    } catch (e) {
      this.logger.error('Something occur when query');
    } finally {
      await start.end();
    }
  }
}
