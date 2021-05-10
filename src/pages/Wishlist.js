import { useCart } from "../dataProvider/CartProvider";

export function WishList() {
  const { showWishList, setShowWishList } = useCart();
  function removeItem(obj) {
    setShowWishList(
      showWishList.filter((item) => (item.id === obj.id ? !item : item))
    );
  }
  return (
    <ul className="card-div">
      {showWishList.map((obj) => {
        return (
          <div className="card">
            <img src={obj.image} alt={obj.name} className="product-img" />
            <li style={{ margin: "0.5rem" }}>{obj.name}</li>
            <p style={{ margin: "0.3rem" }}>{obj.price}</p>
            <button onClick={() => removeItem(obj)} className="secondary-btn">
              Remove
            </button>
          </div>
        );
      })}
    </ul>
  );
}
