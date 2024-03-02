import { Injectable } from '@nestjs/common';
import { PostgresConfig } from '../../../enviroment/database';
import { IAppConfig, IPostgresConfig } from './config.service.i';
import { AppConfig } from '../../../enviroment/app';

@Injectable()
export class ConfigService {
  public postgresConfig: IPostgresConfig;
  public appConfig: IAppConfig;

  constructor() {
    this.postgresConfig = new PostgresConfig();
    this.appConfig = new AppConfig();
  }

  public AppConfig(){
    return this.appConfig;
  }

  public PostgresConfig() {
    return this.postgresConfig;
  }
}
