import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ChatLogger } from './app/utils/logger/logger';
import { ConfigService } from './app/infracture/config/config.service';

async function bootstrap() {
  const appConfig = new ConfigService().AppConfig();
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(ChatLogger));
  await app.listen(appConfig.port);
  app
    .get(ChatLogger)
    .log(`This host is running on port: http://localhost:${appConfig.port}`, "RunLocalhost");
}
bootstrap();
