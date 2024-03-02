import { Controller, Get, Param, Req } from '@nestjs/common';
import { ChatLogger } from './../../../app/utils/logger/logger';
import { GetUserInformationRes } from './get-user-information.controller.i';
import { GetUserInformationService } from '../../../app/infracture/service/get-user-information/get-user-information.service';
import { Request } from 'express';

@Controller('')
export class GetInformationUserController {
  constructor(
    private logger: ChatLogger,
    private handler: GetUserInformationService,
  ) {}

  @Get('/user-information/:email')
  async getUserInformation(
    @Req() req: Request,
    @Param('email') param: string,
  ): Promise<GetUserInformationRes> {
    const getUserInfoArg = {
      email: param,
    };

    this.logger.log('Get user information has been request', 'GET API');
    const data = await this.handler.getUserInformation(getUserInfoArg);

    return data;
  }
}
