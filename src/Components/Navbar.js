import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  return (
    <div className="nav-bar">
      <img
        src="https://themeforshop.github.io/kala-pottery-demo/images/logo.png"
        alt="logo"
      />
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/category"> Category </Link>
        <Link to="/cart">Cart </Link>
        <Link to="/wishlist">WishList </Link>
        <SearchBar />
      </nav>
    </div>
  );
}
