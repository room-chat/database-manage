import { Module } from "@nestjs/common";
import { ChatLoggerModule } from "../../../app/utils/logger/logger.module";
import { CreateUserServiceModule } from "../../../app/infracture/service/create-user/create-user.service.module";
import { CreateUserController } from "./create-user.controller";

@Module({
  imports: [ChatLoggerModule, CreateUserServiceModule],
  controllers: [CreateUserController]
})
export class CreateUserControllerModule {}