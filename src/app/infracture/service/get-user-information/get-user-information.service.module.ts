import { Module } from "@nestjs/common";
import { ChatLoggerModule } from "../../../../app/utils/logger/logger.module";
import { ClientServiceModule } from "../client/client.module";
import { GetUserInformationService } from "./get-user-information.service";

@Module({
  imports: [ChatLoggerModule, ClientServiceModule],
  exports: [GetUserInformationService],
  providers: [GetUserInformationService]
})
export class GetInformationUserServiceModule {}