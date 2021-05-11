import { Link } from "react-router-dom";

export function Register(){
    return <div className="login-register">
        <h1 className="login-register-heading">Register</h1>
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
            <button className="primary-btn">
                REGISTER
            </button>
            <div>
                <Link to="/products">Return to Store</Link>
                <Link to="/login">Already Registered?</Link>
            </div>
        </form>
    </div>
}