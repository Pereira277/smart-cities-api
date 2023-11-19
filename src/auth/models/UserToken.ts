import { UserPayload } from './UserPayload';

export interface LoginResponse {
  access_token: string;
  user: UserPayload;
}
