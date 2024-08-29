import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export default  function AuthProvider({children}) {
const initailAuth = localStorage.getItem('user')
const [authUser , setAuthUser] = useState(initailAuth? JSON.parse(initailAuth): undefined)
return(
    <AuthContext.Provider value={[authUser,setAuthUser]} >
        {children}
    </AuthContext.Provider>
)
}
export const useAuth = ()=> useContext(AuthContext)
  


