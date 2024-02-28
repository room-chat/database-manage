import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestControllerModule } from './app/controller/rest-controller.module';

@Module({
  imports: [RestControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
