export interface AuthorizedReq {
  email: string
}

export interface AuthorizedRes {
  userId: number,
  email: string,
  password: string
}
