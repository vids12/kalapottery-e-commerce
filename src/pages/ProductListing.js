import { useEffect, useState } from "react";
import { useCart } from "../dataProvider/CartProvider";
import axios from "axios";
import { Filters } from "../Components/Filters";
import { getFilterData } from "../filterFunctions/getFilteredData";
import { getSortedArr } from "../filterFunctions/getSortedArr";
import { Link } from "react-router-dom";
import { getSearchData } from "../filterFunctions/getSearchedData";


export function ProductListing() {
  const [loading, setLoading] = useState(false);
  const [showProducts, setShowProducts] = useState([]);
  const { dispatch: cartDispatch,showInventory,fastDelivery,sortBy,itemsInCart,wishList } = useCart();
  let { searchValue } = useCart();
  const sortedArr = getSortedArr(showProducts, sortBy);
  const filteredData = getFilterData(sortedArr, showInventory,fastDelivery);
  const searchData = getSearchData(filteredData,searchValue)
  useEffect(() => {
    (async function () {
      setLoading(true);
      const response = await axios.get("https://e-comm-backend.vids18.repl.co/products");
      setLoading(false);
      setShowProducts(response.data.products);
    })();
  }, [showProducts===[]]);
  return (
    <>
      <div className="bg-img product-bgImg">
        <h2 className="page-heading">Products</h2>
      </div>
      {loading && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
      <Filters />
      <h3 style={{margin:"0.5rem"}}>Show {searchData.length} results</h3>
      <ul className="card-div">
        {searchData.map((obj) => {
          return (
            <div className="card">
              <img src={obj.image} alt={obj.name} className="product-img" />
              <li style={{ margin: "0.5rem" }}>{obj.name}</li>
              <p style={{ margin: "0.3rem" }}>Rs.{obj.price}</p>
              <p style={{ margin: "0.3rem" }}>{obj.inStock ? "In Stock" : "Out Of Stock"}</p>
              <p style={{ margin: "0.2rem" }}>{obj.fastDelivery ? "Fast Delivery Available" : "Fast Delivery not Avaliable"}</p>
              <button
                onClick={() =>{ cartDispatch({ type: "ADD_TO_CART", payload: obj  });
                      
                }
                  }
                  className="primary-btn"
                  style={{display:itemsInCart.includes(obj) ? "none" : "inline-block"}}
                >
                  Add to Cart
              </button>
              { itemsInCart.includes(obj) && <Link to="/cart"><button className="primary-btn">Go to Cart</button></Link>}
              <button
                onClick={() =>cartDispatch({type: "ADD_TO_WISHLIST", payload: obj})}
                className="secondary-btn"
                disabled={wishList.includes(obj)}
              >
                {wishList.includes(obj) ? "Added to WishList" : "Add to WishList"}
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}