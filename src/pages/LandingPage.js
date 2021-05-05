import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { getBestSellerData } from "../filterFunctions/getBestSellerData";
import { getNewArrivalData } from "../filterFunctions/getNewArrivalData";
import { getTopRatesData } from "../filterFunctions/getTopRatesData";
import { LandingPageCard } from "../Components/LandingPageCard";
import { useCart } from "../dataProvider/CartProvider";
export function LandingPage() {
  const [route, setRoute] = useState("newArrival");
  const [showProducts, setShowProducts] = useState([]);
  const { dispatch: cartDispatch ,itemsInCart ,wishList} = useCart();
  useEffect(() => {
    (async function () {
      const response = await axios.get(`https://e-comm-backend.vids18.repl.co/products`);
      setShowProducts(response.data.products);
    })();
  });
  const bestSellerData = getBestSellerData(showProducts);
  const newArrivalData = getNewArrivalData(showProducts);
  const topRatesData = getTopRatesData(showProducts);
  return (
    <>
      <section style={{ textAlign: "center" }}>
        <img
          src="//cdn.shopify.com/s/files/1/0535/8049/7061/files/bg_slide1.jpg?v=1612856055"
          alt="homepage-img"
          className="home-img"
        />
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0535/8049/7061/files/slide1.1.jpg?v=1612855741" alt="slide-img" className="slide-img" />
        </div>
      </section>
      <LandingPageCard />
      <section className="bestSeller-div">
        <h3 className="title-heading">Our Best Seller</h3>
        <div className="landing-btns">
          <button className="secondary-btn active" onClick={()=>setRoute("newArrival")}>New Arrivals</button>
          <button className="secondary-btn" onClick={()=>setRoute("bestSeller")}>Best Sellers</button>
          <button className="secondary-btn" onClick={()=>setRoute("topRates")}>Top Rates</button>
        </div>
        <div>
          {route ==="newArrival" && <ul className="card-div">
        {newArrivalData.map((obj) => {
          return (
            <div className="card">
              <img src={obj.image} alt={obj.name} className="product-img" />
              <li style={{ margin: "0.5rem" }}>{obj.name}</li>
              <p style={{ margin: "0.3rem" }}>Rs.{obj.price}</p>
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
      </ul>}
          {route === "bestSeller" && <ul className="card-div">
        {bestSellerData.map((obj) => {
          return (
            <div className="card">
              <img src={obj.image} alt={obj.name} className="product-img" />
              <li style={{ margin: "0.5rem" }}>{obj.name}</li>
              <p style={{ margin: "0.3rem" }}>Rs.{obj.price}</p>
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
          }
          {route === "topRates" && <ul className="card-div">
        {topRatesData.map((obj) => {
          return (
            <div className="card">
              <img src={obj.image} alt={obj.name} className="product-img" />
              <li style={{ margin: "0.5rem" }}>{obj.name}</li>
              <p style={{ margin: "0.3rem" }}>Rs.{obj.price}</p>
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
      </ul>}
        </div>
      </section>
      <footer className="footer">
        <div className="footer-header"><strong>Connect with me on:</strong></div>
        <ul className="social-sites">
           
            <li className="list-inline">
                <a target="_blank" className="link" href="https://github.com/vids12">Github</a>
            </li>
            <li className="list-inline">
                <a target="_blank" className="link" href="https://twitter.com/Vids_12">Twitter</a>
            </li>
            <li className="list-inline">
                <a target="_blank" className="link" href="http://www.linkedin.com/in/vidushiagrawal18">Linkedin</a>
            </li>
        </ul>
    </footer>
    </>
  );
}
