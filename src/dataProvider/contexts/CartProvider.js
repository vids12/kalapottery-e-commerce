import { createContext, useContext, useState, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [ searchValue,setSearchValue ] = useState("");
  const [showSearchPage, setShowSearchPage] = useState(false);  
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, {
    itemsInCart: [],
    wishList: [],
    showInventory: true,
    fastDelivery: false,
    sortBy: null
  });
  return (
    <CartContext.Provider
      value={{
        showInventory: state.showInventory,
        itemsInCart: state.itemsInCart,
        wishList: state.wishList,
        fastDelivery: state.fastDelivery,
        sortBy: state.sortBy,
        dispatch,
        searchValue,
        setSearchValue,
        setShowSearchPage,
        showSearchPage,
        showCartSidebar,
        setShowCartSidebar
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}

