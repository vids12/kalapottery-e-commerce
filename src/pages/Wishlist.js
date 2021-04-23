import { useCart } from "../dataProvider/CartProvider";

export function WishList() {
  const { wishList,dispatch: wishlistDispatch } = useCart();
  return (
    <ul className="card-div">
      {wishList.map((obj) => {
        return (
          <div className="card">
            <img src={obj.image} alt={obj.name} className="product-img" />
            <li style={{ margin: "0.5rem" }}>{obj.name}</li>
            <p style={{ margin: "0.3rem" }}>{obj.price}</p>
            <button onClick={() => wishlistDispatch({type:"REMOVE_FROM_WISHLIST",payload: obj})} 
            className="secondary-btn">
              Remove
            </button>
          </div>
        );
      })}
    </ul>
  );
}
