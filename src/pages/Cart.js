import { useCart } from "../dataProvider/CartProvider";
export function Cart() {
  const { itemsInCart, dispatch: cartDispatch } = useCart();
  return (
    <>
      <ul className="card-div">
        {itemsInCart.map((obj) => {
          return (
            <div className="card">
              {/* <img src={obj.image} alt={obj.name} className="product-img" /> */}
              <li style={{ margin: "0.5rem" }}>{obj.name}</li>
              <p style={{ margin: "0.3rem" }}>{obj.price}</p>
              <div>
                <button
                  className="primary-btn"
                  onClick={() =>
                    cartDispatch({ type: "DECREASE_QUANTITY", payload: obj })
                  }
                  disabled={obj.quantity === 1}
                >
                  -
                </button>
                <small>{obj.quantity}</small>
                <button
                  onClick={() =>
                    cartDispatch({ type: "INCREASE_QUANTITY", payload: obj })
                  }
                  className="primary-btn"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => cartDispatch({ type: "REMOVE", payload: obj })}
                className="secondary-btn"
              >
                Remove
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
