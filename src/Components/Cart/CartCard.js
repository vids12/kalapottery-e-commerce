import { useCart } from "../../dataProvider/CartProvider";

export function CartCard(){
    const { itemsInCart, dispatch: cartDispatch } = useCart();
    function totalamount(){
        return itemsInCart.reduce(((acc,value) => value.price * value.quantity + acc),0)
    }
    return <div>
        <h2 style={{textAlign:"center",margin:"1rem"}}>Total: {totalamount()}</h2>
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
                  onClick={() => cartDispatch({ type: "DECREASE_QUANTITY",payload: obj })}
                  disabled={obj.quantity===1}
                >
                  -
                </button>
                {obj.quantity}
                <button
                  onClick={() => cartDispatch({ type: "INCREASE_QUANTITY",payload: obj })}
                  className="primary-btn"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => cartDispatch({ type: "REMOVE_FROM_CART",payload: obj })}
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