import { createContext, useContext, useState, useReducer } from "react";
import { cartReducer } from "./cartReducer";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    itemsInCart: [],
    showInventory: true,
    fastDelivery: false,
    sortBy: null
  });
  const [showWishList, setShowWishList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  return (
    <CartContext.Provider
      value={{
        showInventory: state.showInventory,
        itemsInCart: state.itemsInCart,
        fastDelivery: state.fastDelivery,
        dispatch,
        sortBy: state.sortBy,
        showWishList,
        setShowWishList,
        searchValue,
        setSearchValue
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
