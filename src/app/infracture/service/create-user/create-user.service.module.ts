import { Module } from "@nestjs/common";
import { ChatLoggerModule } from "../../../../app/utils/logger/logger.module";
import { CreateUserService } from "./create-user.service";
import { ClientServiceModule } from "../client/client.module";

@Module({
  imports: [ChatLoggerModule, ClientServiceModule],
  exports: [CreateUserService],
  providers: [CreateUserService]
})
export class CreateUserServiceModule {}