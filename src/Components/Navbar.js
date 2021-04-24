import { Link } from "react-router-dom";
import { useCart } from "../dataProvider/CartProvider";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  const {itemsInCart, wishList} = useCart();
  return <div className="nav-bar">
    <img
        src="https://themeforshop.github.io/kala-pottery-demo/images/logo.png"
        alt="logo"
      />
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/products"> Products </Link>
      <Link to="/cart">Cart <span>{itemsInCart.length}</span></Link>
      <Link to="/wishlist">WishList <span>{wishList.length}</span></Link>
      <SearchBar />
    </nav>
  </div>
}