import { Module } from "@nestjs/common";
import { ChatLoggerModule } from "../../../../app/utils/logger/logger.module";
import { ClientService } from "./client";
import { PostgresServiceModule } from "../postgres/postgres.service.module";

@Module({
  imports: [PostgresServiceModule, ChatLoggerModule],
  exports: [ClientService],
  providers: [ClientService]
})
export class ClientServiceModule {}