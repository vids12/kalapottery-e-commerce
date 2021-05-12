import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

const user={
  email:"kuchbhi@gmail.com",
  password: "root"
}

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  async function loginUserWithCredentials(email,password){
    if(email ===user.email && password === user.password)
      setIsLogin(true);
  }
  return (
    <AuthContext.Provider value={{ isLogin,loginUserWithCredentials,isLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
