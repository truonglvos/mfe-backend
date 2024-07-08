export class AuthDto {
  username: string;
  password: string;
}

export interface AuthRes {
  accessToken: string;
  email: string;
  refreshToken: string;
  phone: string;
  roles: {
    roleDescEN: string;
    roleId: number;
  }[];
  username: string;
}
