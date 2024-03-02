import { Module } from "@nestjs/common";
import { ConfigServiceModule } from "../../config/config.service.module";
import { ChatLoggerModule } from "../../../../app/utils/logger/logger.module";
import { PostgresSerivce } from "./postgres.service";

@Module({
  imports: [ConfigServiceModule, ChatLoggerModule],
  exports: [PostgresSerivce],
  providers: [PostgresSerivce]
})
export class PostgresServiceModule{}