export interface GetUserInformationRes {
  userId: number;
  email: string;
  firstName: string;
  dayOfBirth: string;
  lastName: string;
  address: string;
  city: string;
}

export interface GetUserInformationParams {
  email: string;
}