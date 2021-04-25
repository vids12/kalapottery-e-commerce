import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../dataProvider/CartProvider";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  // const [openSidebar,setOpenSidebar] = useState();
  const {itemsInCart, wishList} = useCart();
  return <div className="nav-bar">
    <img
        src="https://themeforshop.github.io/kala-pottery-demo/images/logo.png"
        alt="logo"
      />
      <div className="btn">
        <img src="https://www.flaticon.com/svg/vstatic/svg/3388/3388829.svg?token=exp=1619272488~hmac=31cd8170d45da88e513d33e2007c3b2c"  alt="hamburger-icon" className="ham"/>
      <nav className="sidebar">
        <Link to="/"> Home </Link>
        <Link to="/products"> Products </Link>
        <Link to="/cart">Cart <span>{itemsInCart.length}</span></Link>
        <Link to="/wishlist">WishList <span>{wishList.length}</span></Link>
        <SearchBar />
      </nav>
      </div>
  </div>
}