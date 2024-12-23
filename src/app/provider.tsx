// "use client";

// import React, {
//   createContext,
//   useState,
//   ReactNode,
//   FC,
//   useContext,
// } from "react";

// interface AuthContextType {
//   auth: string | null;
//   setAuth: (auth: string | null) => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthContextProvider: FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [auth, setAuth] = useState<string | null>(null);

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType | undefined => {
//   const context = useContext(AuthContext);

//   return context;
// };

"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  FC,
  useContext,
  useEffect,
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

  // Effect to run after the component mounts (only in the client)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAuth = localStorage.getItem("auth");
      if (storedAuth) {
        setAuth(storedAuth); // Load from localStorage if available
      }
    }
  }, []); // Empty dependency array ensures this runs only once after mounting

  // Update localStorage whenever auth changes
  useEffect(() => {
    if (auth !== null) {
      localStorage.setItem("auth", auth); // Persist auth to localStorage
    } else {
      localStorage.removeItem("auth"); // Remove it if auth is null
    }
  }, [auth]);

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
