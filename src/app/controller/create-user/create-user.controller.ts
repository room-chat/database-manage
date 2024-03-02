import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserReq, StatusResponse } from './create-user.controller.i';
import { ChatLogger } from '../../../app/utils/logger/logger';
import { CreateUserService } from '../../../app/infracture/service/create-user/create-user.service';
import { IStatus } from '../../../app/utils/constant/constant';
import { Status } from 'src/app/infracture/service/create-user/create-user.service.i';

@Controller('')
export class CreateUserController {

  constructor(private logger: ChatLogger, private createUserService: CreateUserService){}

  @Post('/create-user')
  public async createUser(
    @Req() req: Request,
    @Body() createUserReq: CreateUserReq,
  ): Promise<StatusResponse> {
    const postUser = createUserReq;

    try {
      const createRes = await this.createUserService.createUser$(postUser);
      if(createRes.status === Status.SUCCESS){
        this.logger.log('Create user has success');

        return {
          code: IStatus.SUCCESS,
          message: "createUserSuccess"
        }
      } else {
        this.logger.log('Create user has fail');

        return {
          code: IStatus.BAD_REQUEST,
          message: "createUserFails"
        }
      }
    } catch(e) {
      this.logger.log('Create user has failes, something occur');

      return {
        code: IStatus.ERROR_OCCUR,
        message: "createUserFails"
      }
    }
  }
}
