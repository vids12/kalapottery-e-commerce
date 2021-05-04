import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../dataProvider/CartProvider";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  const {itemsInCart, wishList, setShowSearchPage, showSearchPage} = useCart();
  return <div className="nav-bar">
    <img
        src="https://themeforshop.github.io/kala-pottery-demo/images/logo.png"
        alt="logo"
      />
      <div className="btn">
        <img src="https://www.flaticon.com/svg/vstatic/svg/3388/3388829.svg?token=exp=1619272488~hmac=31cd8170d45da88e513d33e2007c3b2c"  alt="hamburger-icon" className="ham"/>
        <nav className="sidebar">
          <i className="fas fa-search" onClick={()=>setShowSearchPage(true)}>Search</i>
          {showSearchPage && <SearchBar />}
          <NavLink end to="/" activeStyle={{fontWeight : "bold"}} activeClassName="selected"> Home </NavLink>
          <NavLink to="/products" activeStyle={{fontWeight : "bold"}}> Products </NavLink>
          <NavLink to="/cart" activeStyle={{fontWeight : "bold"}}>Cart <span>{itemsInCart.length}</span></NavLink>
          <NavLink to="/wishlist" activeStyle={{fontWeight : "bold"}}>WishList <span>{wishList.length}</span></NavLink>
        </nav>
      </div>
  </div>
}