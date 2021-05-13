import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../dataProvider/AuthProvider";


export function Login(){
    const { loginUserWithCredentials ,email,setEmail } = useAuth();
    const [password,setPassword] = useState("");
    const  { state } = useLocation();
    const  navigate = useNavigate();
    function loginHandler(){
        loginUserWithCredentials(email,password);
        navigate(state?.from ? state.from : "/")
    }
    return <div className="login-register">
        <h1 className="login-register-heading">Login</h1>
        <section className="form">
            <div>
                <label >
                    Email address
                    <input placeholder="Enter Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                </label>
            </div>
            <div>
                <label>
                    Password
                    <input placeholder="Enter Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                </label>
            </div>
            <button className="primary-btn" onClick={loginHandler}>LOG IN</button>
            <div>
                <Link to="/products">Return to Store</Link>
                <Link to="/resetpassword">Forgot your password?</Link>
            </div>
        </section>
    </div>
}