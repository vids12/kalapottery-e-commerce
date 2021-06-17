import axios from "axios";
import { useCart } from "../dataProvider/contexts/CartProvider";

export function WishList() {
  const { wishList,dispatch: wishlistDispatch } = useCart();
  async function deleteFromWishList(obj) {
    await axios.delete(`https://e-comm-backend.vids18.repl.co/wishlist/${obj._id}`);
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: obj });
  }
  return <div>
        <div className="bg-img cart-bgImg">
          <h2 className="page-heading">WishList</h2>
        </div>
        <ul className="card-div">
        {wishList.map((obj) => {
          return (
            <div className="card" key={obj._id}>
              <img src={obj.image} alt={obj.name} className="product-img" />
              <li style={{ margin: "0.5rem" }}>{obj.name}</li>
              <p style={{ margin: "0.3rem" }}>{obj.price}</p>
              <button onClick={() => deleteFromWishList(obj)} 
              className="secondary-btn">
                Remove
              </button>
            </div>
          );
        })}
    </ul>
  </div>
}
