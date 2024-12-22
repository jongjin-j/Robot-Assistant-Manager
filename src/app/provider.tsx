"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  FC,
  useContext,
} from "react";

interface AuthContextType {
  auth: string | null;
  setAuth: (auth: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType | undefined => {
  const context = useContext(AuthContext);

  return context;
};
