import { Module } from "@nestjs/common";
import { AuthorizedUserController } from "./authorized-user.controller";
import { ChatLoggerModule } from "../../../app/utils/logger/logger.module";
import { AuthorizedUserServiceModule } from "../../../app/infracture/service/authorized-user/authorized-user.service.module";

@Module({
  imports: [ChatLoggerModule, AuthorizedUserServiceModule],
  controllers: [AuthorizedUserController]
})
export class AuthorizedUserControllerModule {}