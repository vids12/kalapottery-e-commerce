import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./dataProvider/CartProvider";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </StrictMode>,
  rootElement
);
