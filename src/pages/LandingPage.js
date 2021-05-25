import { useState,useEffect } from "react";
import axios from "axios";
import { getBestSellerData } from "../filterFunctions/getBestSellerData";
import { getNewArrivalData } from "../filterFunctions/getNewArrivalData";
import { getTopRatesData } from "../filterFunctions/getTopRatesData";
import { LandingPageCard } from "../Components/Home Page/LandingPageCard";
import { OfferCard } from "../Components/Home Page/OfferCard";
export function LandingPage() {
  const [route, setRoute] = useState("newArrival");
  const [showProducts, setShowProducts] = useState([]);
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
          <button className="secondary-btn" onClick={()=>setRoute("newArrival")} style={route==="newArrival" ? {backgroundColor:"black",color:"white" } : {backgroundColor:"white",color:"black"} }>New Arrivals</button>
          <button className="secondary-btn" onClick={()=>setRoute("bestSeller")} style={route==="bestSeller" ? {backgroundColor:"black",color:"white" } : {backgroundColor:"white",color:"black"} }>Best Sellers</button>
          <button className="secondary-btn" onClick={()=>setRoute("topRates")} style={route==="topRates" ? {backgroundColor:"black",color:"white" } : {backgroundColor:"white",color:"black"} }>Top Rates</button>
        </div>
        <div>
          {route ==="newArrival" && <OfferCard list={newArrivalData}/>}
          {route === "bestSeller" && <OfferCard list={bestSellerData}/>}
          {route === "topRates" && <OfferCard list={topRatesData} />}
        </div>
      </section>
      <Banner />
    </>
  );
}
