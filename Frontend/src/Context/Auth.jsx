import React, { createContext, useContext, useState } from 'react'


export const AuthContext = createContext()
export default function AuthProvider({children}) {
    const initialuser = localStorage.getItem("Users")
    const [authUser,setauthUser] = useState(initialuser?JSON.parse(initialuser):undefined)
  return (
    <AuthContext.Provider value={[authUser,setauthUser]}>
        {children}
    </AuthContext.Provider>
  )
}
export const useAuth=()=>useContext(AuthContext)