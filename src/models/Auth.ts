import { User } from "firebase/auth";

export type AuthContextType = {
  user: User | null;
  login: () => Promise<void>;
  error: string | null;
};
