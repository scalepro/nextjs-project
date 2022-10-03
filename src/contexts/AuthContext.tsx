import { createContext, useState, useEffect } from 'react';

type User = {
  name: string;
  email: string;
  active: boolean;
  plan: string;
  theme: string;
  store: string;
  verified: boolean;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
};

export const AuthContext = createContext({} as AuthContextType);
export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;
  
  useEffect(() => {
    setUser({
      name: 'Gustavo Araujo',
      email: 'gwga@hotmail.com',
      active: true,
      plan: 'Premium',
      theme: 'Bume',
      store: 'Lojas Hiper',
      verified: true,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
