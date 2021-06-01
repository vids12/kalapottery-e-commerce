import axios from "axios";
import { useCart } from "../../dataProvider/CartProvider";
import { totalAmount } from "../../utils/totalAmount";

export function CartCard(){
  const { itemsInCart, dispatch: cartDispatch } = useCart();
  async function deleteItems(obj) {
    await axios.delete(`https://e-comm-backend.vids18.repl.co/cart/${obj._id}`);
    cartDispatch({ type: "REMOVE_FROM_CART", payload: obj });
  }
  async function decreaseQuantity(obj) {
    await axios.post(`https://e-comm-backend.vids18.repl.co/cart/${obj._id}`, {quantity: obj.quantity - 1});
    cartDispatch({ type: "DECREASE_QUANTITY", payload: obj });
  }
  async function increaseQuantity(obj) {
    await axios.post(`https://e-comm-backend.vids18.repl.co/cart/${obj._id}`,{quantity: obj.quantity +1} );
    cartDispatch({ type: "INCREASE_QUANTITY", payload: obj });
  }
    return <div>
        <h2 style={{textAlign:"center",margin:"1rem"}}>Total: {totalAmount()}</h2>
      <ul className="card-div">
        {itemsInCart.map((obj) => {
          return (
            <div className="card" key={obj._id}>
              <img src={obj.image} alt={obj.name} className="product-img" />
              <li style={{ margin: "0.5rem" }}>{obj.name}</li>
              <p style={{ margin: "0.3rem" }}>{obj.price}</p>
              <div>
                <button
                  className="primary-btn"
                  onClick={() => decreaseQuantity(obj)}
                  disabled={obj.quantity===1}
                >
                  -
                </button>
                {obj.quantity}
                <button
                  onClick={() => increaseQuantity(obj)}
                  className="primary-btn"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => deleteItems(obj)}
                className="secondary-btn"
              >
                Remove
              </button>
            </div>
          );
        })}
      </ul>
    </div>
}