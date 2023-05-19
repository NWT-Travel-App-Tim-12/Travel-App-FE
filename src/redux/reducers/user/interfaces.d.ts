import { User } from "../../../models/User";

export interface UserStore extends User {
  isUserLoggedIn: boolean;
  token: string;
  isLoading?: boolean;
  error?: string | null;
}
