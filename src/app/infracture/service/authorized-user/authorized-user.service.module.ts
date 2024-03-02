import { Module } from '@nestjs/common';
import { ChatLoggerModule } from '../../../../app/utils/logger/logger.module';
import { AuthorizedUserService } from './authorized-user.service';
import { ClientServiceModule } from '../client/client.module';

@Module({
  imports: [ChatLoggerModule, ClientServiceModule],
  exports: [AuthorizedUserService],
  providers: [AuthorizedUserService],
})
export class AuthorizedUserServiceModule {}
