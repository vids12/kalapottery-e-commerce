import { Link } from "react-router-dom";
import { useCart } from "../dataProvider/CartProvider";
import { CartCard } from "../Components/CartCard";
export function Cart() {
  const { itemsInCart } = useCart();
  return (
    <>
      <div className="bg-img cart-bgImg">
        <h2 className="page-heading">Cart</h2>
      </div>
      {itemsInCart.length !== 0 ? <CartCard /> : <div style={{margin: "2rem"}}><h6 style={{marginBottom:"1rem",fontSize:"1rem"}}>Your cart is currently empty.</h6> <Link to="/products">Continue browsing here.</Link></div>}
    </>
  );
}