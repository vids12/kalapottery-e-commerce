import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useCart } from "../dataProvider/CartProvider";
import axios from "axios";
export function ProductListing() {
  const [loading, setLoading] = useState(false);
  let itemsName = [];
  // const [gotocart, setGoToCart] = useState(false);
  const [showProducts, setShowProducts] = useState([]);
  const {
    dispatch,
    setShowWishList,
    showInventory,
    fastDelivery,
    sortBy
  } = useCart();
  let { searchValue } = useCart();
  useEffect(() => {
    (async function () {
      setLoading(true);
      const response = await axios.get(`/api/products`);
      setLoading(false);
      setShowProducts(response.data.products);
    })();
  }, []);
  function getFilterData(productList, showInventory, fastDelivery) {
    return productList
      .filter((item) => (showInventory ? item : item.inStock))
      .filter((item) => (fastDelivery ? item.fastDelivery : item));
  }
  function getSortedArr(productList, sortBy) {
    if (sortBy === "PRICE_HIGH_TO_LOW")
      return productList.sort((a, b) => b.price - a.price);
    else if (sortBy === "PRICE_LOW_TO_HIGH")
      return productList.sort((a, b) => a.price - b.price);
    else return productList;
  }
  function getSearchData(productList, searchValue) {
    console.log(searchValue);
    return productList.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ? item : !item
    );
  }
  const sortedArr = getSortedArr(showProducts, sortBy);
  const filteredData = getFilterData(sortedArr, showInventory, fastDelivery);
  const searchData = getSearchData(filteredData, searchValue);
  console.log(searchData);
  return (
    <>
      {loading && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
      <fieldset>
        <legend>Sort By</legend>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
          ></input>
          Price-high to low
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
          ></input>
          Price-low to high
        </label>
      </fieldset>
      <fieldset>
        <legend>Filter</legend>
        <label>
          <input
            type="checkbox"
            checked={showInventory}
            onClick={() => dispatch({ type: "TOGGLE_INVENTORY" })}
          ></input>
          Include Out Of Stock
        </label>
        <label>
          <input
            type="checkbox"
            checked={fastDelivery}
            onClick={() => dispatch({ type: "FAST_DELIVERY" })}
          ></input>
          Fast-Delivery
        </label>
      </fieldset>
      <ul className="card-div">
        {searchData.map((obj) => {
          return (
            <div className="card">
              <img src={obj.image} alt={obj.name} className="product-img" />
              <li style={{ margin: "0.5rem" }}>{obj.name}</li>
              <p style={{ margin: "0.3rem" }}>{obj.price}</p>
              <p>{obj.inStock ? "In Stock" : "Out Of Stock"}</p>
              <p>
                {obj.fastDelivery
                  ? "Fast Delivery Available"
                  : "Fast Delivery not Avaliable"}
              </p>

              {/* {gotocart ? <Link to="/cart" className="primary-btn">Go To Cart</Link> : */}
              <button
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: obj });
                  // setGoToCart(true);
                }}
                className="primary-btn"
              >
                {/* {gotocart ? "Go to Cart" : "Add to Cart"} */}
                Add To Cart
              </button>
              <button
                onClick={() => setShowWishList((items) => [...items, obj])}
                className="secondary-btn"
              >
                Add to WishList
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
