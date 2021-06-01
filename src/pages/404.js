import { Link } from "react-router-dom";

export function NotFound(){
    return <div className="notfound-div">
        <h1 className="notfound-heading">404</h1>
        <h2 className="notfound-sub-heading">Oops! That Page Can’t Be Found.</h2>
        <p className="notfound-sub-title">THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS</p>
        <p className="notfound-p">Please return to <Link to="/" style={{color:"#757b66"}}>Home page</Link></p>
    </div>
}