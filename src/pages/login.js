import { Link } from "react-router-dom";
import { useAuth } from "../dataProvider/AuthProvider";

export function Login(){
    const { setIsLogin } = useAuth();
    return <div className="login-register">
        <h1 className="login-register-heading">Login</h1>
        <form>
            <div>
                <label >
                    Email address
                    <input placeholder="Enter Email" type="email" required></input>
                </label>
            </div>
            <div>
                <label>
                    Password
                    <input placeholder="Enter Password" type="password"></input>
                </label>
            </div>
            <button className="primary-btn" onClick={()=>setIsLogin(true)}>LOG IN</button>
            <div>
                <Link to="/products">Return to Store</Link>
                <Link to="/resetpassword">Forgot your password?</Link>
            </div>
        </form>
    </div>
}