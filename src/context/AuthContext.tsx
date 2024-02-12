import { FC, ReactNode, createContext, useState } from "react";
import { AuthContextType } from "../models/Auth";
import { User } from "firebase/auth";
import { loginWithGoogle } from "../services/firebase.service";

export type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    setError(null);

    try {
      const response = await loginWithGoogle();
      if (!response) {
        setError("Login failed. Please try again.");
        return;
      }

      setUser(response);
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    }
  };

  const value = { user, login, error };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
