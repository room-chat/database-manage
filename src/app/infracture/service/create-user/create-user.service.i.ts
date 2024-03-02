export enum Status{
  FAIL = "failure",
  SUCCESS = "success"
}

export interface ICreateResult {
  status: Status;
  userId?: number;
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
