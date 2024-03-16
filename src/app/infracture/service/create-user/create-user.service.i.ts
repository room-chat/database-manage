import { IStatus } from "src/app/utils/constant/constant";

export interface ICreateResult {
  userId?: number;
  email?: string;
  status: IStatus;
}

export interface ICreateUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  dayofBirth: string;
  createdAt: string;
}
