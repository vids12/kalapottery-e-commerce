import { Link } from "react-router-dom";

export function ResetPassword(){
    return <div className="login-register">
        <h1 className="login-register-heading">Reset Password</h1>
        <form>
            <div>
                <label >
                    Email address
                    <input placeholder="Enter Email" type="email" required></input>
                </label>
            </div>
            <button className="primary-btn">
                SUBMIT
            </button>
            <div style={{marginLeft:"6rem"}}>
                <Link to="/login">Cancel</Link>
            </div>
        </form>
    </div>
}