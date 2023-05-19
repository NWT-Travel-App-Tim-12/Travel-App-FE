import { USER_ROLE } from "../constants/user";

export interface User {
  id?: 0;
  role?: USER_ROLE;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  city?: string;
  phone?: "666910127";
  accountNonExpired?: boolean;
  credentialsNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: [
    {
      authority?: string;
    }
  ];
  username?: string;
  enabled?: boolean;
}
