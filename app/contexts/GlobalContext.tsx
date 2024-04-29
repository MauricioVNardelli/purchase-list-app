'use client'

import { setCookie, parseCookies } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";

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
  
  useEffect(() => {
    const { ['purchase-list-app.user']: userCookie } = parseCookies();

    if (userCookie && !user) {
      const valueCookie = JSON.parse(userCookie);
      setUser(valueCookie);
    }
  }, [])

  async function setGlobalUser(data: User) {
    setCookie(null, 'purchase-list-app.user', JSON.stringify(data));
    setUser(data);
  }78

  return (
    <GlobalContext.Provider value={{ isAuthenticated, user, setGlobalUser }}>
      {children}
    </GlobalContext.Provider>
  )
}