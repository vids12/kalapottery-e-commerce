import { createContext, useContext, useState } from "react";
import { fakeAuthApi } from "../api/fakeAuthAPI";
export const AuthContext = createContext();

// const user={
//   email:"kuchbhi@gmail.com",
//   password: "root"
// }

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [email,setEmail] = useState("");
  async function loginUserWithCredentials(email,password){
    try{
      const response = await fakeAuthApi(email,password);
      if(response.success){
        setIsLogin(true);
      }
    }catch(err){
      console.error(err);
    }
  }
  return (
    <AuthContext.Provider value={{ isLogin,loginUserWithCredentials,isLogin,email,setEmail }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
