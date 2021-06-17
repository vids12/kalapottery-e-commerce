import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./dataProvider/contexts/CartProvider";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./dataProvider/contexts/AuthProvider";
import { StatusProvider } from "./dataProvider/contexts/StatusProvider";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StatusProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </AuthProvider>
    </StatusProvider>
  </StrictMode>,
  rootElement
);
