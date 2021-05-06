import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../dataProvider/CartProvider";

export function ProductDetail() {
  const [showProducts, setShowProducts] = useState([]);
  const {dispatch: cartDispatch,itemsInCart,wishList} = useCart();
  console.log("df");
  useEffect(() => {
    (async function () {
      const response = await axios.get("https://e-comm-backend.vids18.repl.co/products");
      setShowProducts(response.data.products);
    })();
  });
  const { productId } = useParams();
  function getProductDetails(products, productId) {
    console.log(products);
    return products.find((product) => product._id === productId);
  }
  const product = getProductDetails(showProducts, productId);
  console.log(product);
  return (
    <>
      {product && <div className="product-detail-div">
        <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-div">
                <h2 className="product-heading">{product.name}</h2>
                <p className="product-detail">Rs. {product.price}</p>
                <p className="product-detail">Ratings: {product.ratings}</p>
                <hr />
                <p className="product-description">{product.description}</p>
                <p><span className="option">SIZE</span> <span className="product-size">{product.size}</span></p>
                <p><span className="option">COLOR </span><span className="product-color">{product.color}</span></p>
                <button
                    onClick={() =>{ cartDispatch({ type: "ADD_TO_CART", payload: product});
                        
                    }
                    }
                    className="primary-btn"
                    style={{display:itemsInCart.includes(product) ? "none" : "inline-block"}}
                    >
                    Add to Cart
                </button>
                { itemsInCart.includes(product) && <Link to="/cart"><button className="primary-btn">Go to Cart</button></Link>}
                <button
                    onClick={() =>cartDispatch({type: "ADD_TO_WISHLIST", payload: product})}
                    className="secondary-btn"
                    disabled={wishList.includes(product)}
                >
                    {wishList.includes(product) ? "Added to WishList" : "Add to WishList"}
                </button>
            </div>
            
      </div>
}
      <Link to="/products"> <button className="primary-btn">See All</button> </Link>
    </>
  );
}
