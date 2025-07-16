"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AuthContextType {
  name: string | null;
  email: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  login: (name: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  name: null,
  email: null,
  isLoggedIn: false,
  loading: true,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    if (storedName && storedEmail) {
      setName(storedName);
      setEmail(storedEmail);
    }

    setLoading(false); // Agora sim!
  }, []);

  const login = (newName: string, newEmail: string) => {
    localStorage.setItem("name", newName);
    localStorage.setItem("email", newEmail);
    setName(newName);
    setEmail(newEmail);
  };

  const logout = () => {
    localStorage.clear();
    setName(null);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ name, email, isLoggedIn: !!name, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
