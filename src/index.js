import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./dataProvider/CartProvider";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./dataProvider/AuthProvider";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
  rootElement
);
