import "./styles.css";
import { Navbar } from "./Components/Navbar.js";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ProductListing } from "./pages/ProductListing";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/Wishlist";
import { NotFound } from "./pages/404";
import { ProductDetail } from "./pages/ProductDetail";
import { Footer } from "./Components/Footer";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { PrivateRoute } from "./Components/PrivateRoute";
import { ResetPassword } from "./pages/ResetPassword";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <PrivateRoute path="/wishlist" element={<WishList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:productId" element={<ProductDetail />}/>
        <Route path="/login"  element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}
