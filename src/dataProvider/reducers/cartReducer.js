export function cartReducer(state, action) {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      return {...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: action.payload.quantity + 1 }
            :  item 
        )
      };
    case "DECREASE_QUANTITY":
      return {...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: action.payload.quantity - 1 }
            :  item 
        )
      };
    case "REMOVE_FROM_CART":
      return {...state,
        itemsInCart: state.itemsInCart.filter((item) =>
          item._id === action.payload._id ? !item  :  item 
        )
      };
    case "ADD_TO_CART":
      return {...state,itemsInCart: state.itemsInCart.concat(action.payload)};
    case "ADD_TO_WISHLIST":
      return {...state,wishList: state.wishList.concat(action.payload)};
    case "REMOVE_FROM_WISHLIST":
      return {...state,
        wishList: state.wishList.filter((item) =>
          item._id === action.payload._id ? !item  : item 
        )
      };
    case "SORT":
      return {...state,sortBy: action.payload};
    case "TOGGLE_INVENTORY":
      return { ...state, showInventory: !state.showInventory };
    case "FAST_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "CLEAR_FILTERS":
      return {...state, sortBy:null,showInventory:false, fastDelivery: false};
    default:
      return { state };
  }
}


