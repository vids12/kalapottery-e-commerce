import "./styles.css";
import { Navbar } from "./Components/Navbar.js";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Category } from "./pages/Category";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/Wishlist";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}
