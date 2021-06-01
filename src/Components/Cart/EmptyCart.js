import { Link } from "react-router-dom";

export function EmptyCart() {
    return <div style={{ margin: "2rem" }}>
        <h6 style={{ marginBottom: "1rem", fontSize: "1rem" }}>Your cart is currently empty.</h6>
        <Link to="/products">Continue browsing here.</Link>
    </div>
}