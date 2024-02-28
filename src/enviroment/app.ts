import * as path from 'path';
import * as fs from 'fs';

export type EnvConfig = {
  SERVICE_PATH: string;
}

export type IAppConfig = {
  port: number;
};

export class AppConfig {

  public readonly dir = path.join(__dirname, '../asset/config/config-file.json');
  public readonly nameConfig = 'app';

  public port = 3000;

  constructor(env: EnvConfig = process.env as EnvConfig){
    let conf: IAppConfig;
    try {
      conf = JSON.parse(fs.readFileSync(env.SERVICE_PATH || this.dir, 'utf-8'))[
        this.nameConfig
      ] as IAppConfig;
    } catch (e) {
      console.log(e);
    }

  this.port = conf.port || this.port;  
  }
}