import { Module } from "@nestjs/common";
import { ChatLoggerModule } from "../../../app/utils/logger/logger.module";
import { GetInformationUserController } from "./get-user-information.controller";
import { GetInformationUserServiceModule } from "../../../app/infracture/service/get-user-information/get-user-information.service.module";

@Module({
  imports: [ChatLoggerModule, GetInformationUserServiceModule],
  controllers: [GetInformationUserController],
})
export class GetInformationUserControllerModule {}