import { User } from "../../models/User";

export interface AuthenticateResponse {
  authResponse: {
    token: string;
  };
  user: User;
}
