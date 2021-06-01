import { useAuth } from "../dataProvider/AuthProvider";
import { Navigate, Route } from "react-router-dom";
// import { Login } from "../pages/login";

export function PrivateRoute({path, ...props }) {
    const { isLogin } = useAuth();
    return isLogin ? 
      <Route {...props} path={path} />
     : <Navigate state={{ from : path}} replace to="/login" />
  }