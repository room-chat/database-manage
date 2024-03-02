import { Module } from '@nestjs/common';
import { GetInformationUserControllerModule } from './get-user-information/get-user-information.controller.module';
import { AuthorizedUserControllerModule } from './authorized-user/authorized-user.controller.module';
import { CreateUserControllerModule } from './create-user/create-user.controller.module';

@Module({
  imports: [
    GetInformationUserControllerModule,
    AuthorizedUserControllerModule,
    CreateUserControllerModule
  ]
})
export class RestControllerModule {}
