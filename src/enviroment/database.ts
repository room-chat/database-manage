import * as path from 'path';
import * as fs from 'fs';

export type EnvConfig = {
  SERVICE_PATH: string;
};

export type IPostgresConfig = {
  user: string;
  host: string;
  port: number;
  password: string;
  database: string;
};

export class PostgresConfig {
  public readonly dir = path.join(
    __dirname,
    '../asset/config/config-file.json',
  );
  public readonly nameConfig = 'postgres';

  public host = "localhost";
  public port = 5432;
  public password = 'password';
  public user = 'postgres';
  public database = 'manage_user';

  constructor(env: EnvConfig = process.env as EnvConfig) {
    let conf: IPostgresConfig;
    try {
      conf = JSON.parse(fs.readFileSync(env.SERVICE_PATH || this.dir, 'utf-8'))[
        this.nameConfig
      ] as IPostgresConfig;
    } catch (e) {
      console.log(e);
    }

    this.user = conf.user || this.user;
    this.host = conf.host || this.host;
    this.port = conf.port || this.port;
    this.password = conf.password || this.password;
    this.database = conf.database || this.database;
  }
}
