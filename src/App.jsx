import "./styles.css";
import { Navbar } from "./Components/Navbar.js";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ProductListing } from "./pages/ProductListing";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/Wishlist";
import { NotFound } from "./pages/404";
import { Footer } from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
