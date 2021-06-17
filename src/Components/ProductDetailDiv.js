import { useNavigate } from "react-router";
import { useCart } from "../dataProvider/contexts/CartProvider";

export function ProductDetailDiv({ product }) {
    const { dispatch: cartDispatch, itemsInCart, wishList } = useCart();
    const navigate = useNavigate();
    return <div className="product-detail-div">
    <img src={product.image} alt={product.name} className="product-img" />
    <div className="product-div">
      <h2 className="product-heading">{product.name}</h2>
      <p className="product-detail">Rs. {product.price}</p>
      <p className="product-detail">Ratings: {product.ratings}<i class="fa fa-star fa-1" aria-hidden="true"></i></p>
      <hr />
      <p className="product-description">{product.description}</p>
      <p><span className="option">SIZE</span> <span className="product-size">{product.size}</span></p>
      <p><span className="option" style={{marginTop:"1.5rem"}}>COLOR </span><span className="product-color">{product.color}</span></p>
      {
        itemsInCart.find(item => item._id === product._id)
        ? <button className="primary-btn" onClick={() => navigate("/cart")}>Go to Cart</button>
          : <button onClick={() =>{ cartDispatch({ type: "ADD_TO_CART", payload: product });}} className="primary-btn">
         Add to Cart
        </button>
      }
      <button
        onClick={() => cartDispatch({ type: "ADD_TO_WISHLIST", payload: product })}
        className="secondary-btn"
        disabled={wishList.find(item => item._id === product._id)}
      >
        {wishList.find(item => item._id === product._id) ? "Added to WishList" : "Add to WishList"}
      </button>
      <button className="primary-btn">BUY IT NOW</button>
    </div>
  </div>
}