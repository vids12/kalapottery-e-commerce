export function cartReducer(state, action) {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity + 1 }
            : { item }
        )
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity - 1 }
            : { item }
        )
      };
    case "REMOVE":
      console.log(state.itemsInCart);
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter((item) =>
          item.id === action.payload.id ? !{ item } : { item }
        )
      };
    case "ADD_TO_CART":
      return {
        ...state,
        itemsInCart: state.itemsInCart.concat(action.payload)
      };
    case "SORT":
      return {
        ...state,
        sortBy: action.payload
      };
    case "TOGGLE_INVENTORY":
      return { ...state, showInventory: !state.showInventory };
    case "FAST_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    default:
      return { state };
  }
}
