import { Body, Controller, Post, Req } from '@nestjs/common';
import { ChatLogger } from '../../../app/utils/logger/logger';
import { Request } from 'express';
import { AuthorizedReq, AuthorizedRes } from './authorized-user.controller.i';
import { AuthorizedUserService } from '../../../app/infracture/service/authorized-user/authorized-user.service';

@Controller('')
export class AuthorizedUserController {
  constructor(private logger: ChatLogger, private authorizedService: AuthorizedUserService) {}

  @Post('/authorized-user')
  public async authorizedUser(
    @Req() req: Request,
    @Body() authorized: AuthorizedReq,
  ): Promise<AuthorizedRes> {
    const authParam = { email: authorized.email};

    try {
      const user = await this.authorizedService.get$(authParam);

      return user;
    } catch (e) {
      this.logger.log('Get user has fail, something occur');

      return;
    }
  }
}
