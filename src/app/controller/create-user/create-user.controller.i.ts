import { IsEmail, IsISO8601, IsOptional, IsString } from 'class-validator';
import { IStatus } from '../../../app/utils/constant/constant';

export interface StatusResponse {
  code?: IStatus;
  message?: string;
}

export class CreateUserReq {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  dayofBirth: string;

  @IsOptional()
  @IsISO8601()
  createdAt: string;
}
