'use client'

import { ReactNode, createContext, useState } from "react";

type User = {
  id: string, 
  name: string, 
  password: string, 
  email: string
}

type GlobalContextType = {
  isAuthenticated: boolean;
  user: User | null;
  setGlobalUser: (data: User) => Promise<void>
}

type GlobalProviderProps = {
  children: ReactNode
}

export const GlobalContext = createContext({} as GlobalContextType)

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user;

  async function setGlobalUser(data: User) {
    setUser(data);
  }

  return (
    <GlobalContext.Provider value={{ isAuthenticated, user, setGlobalUser }}>
      {children}
    </GlobalContext.Provider>
  )
}