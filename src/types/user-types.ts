export interface IUser {
  email: string;
  name: string;
}

export interface IUserResponse {
  success: boolean;
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface IUserLogin extends Omit<IUser, 'name'> {
  password: string;
}

export interface IUserRegister extends IUser {
  password: string;
}

export interface IUserResetPassword {
  password: string;
  token: string;
}

export type TTokenError = {
  message: string | null;
}

export interface IRefreshToken extends Omit<IUserResponse, 'user'> {}
