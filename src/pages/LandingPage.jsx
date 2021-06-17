import { useState,useEffect } from "react";
import axios from "axios";
import { getBestSellerData } from "../filterFunctions/getBestSellerData";
import { getNewArrivalData } from "../filterFunctions/getNewArrivalData";
import { getTopRatesData } from "../filterFunctions/getTopRatesData";
import { LandingPageCard } from "../Components/Home Page/LandingPageCard";
import { Banner } from "../Components/Home Page/Banner";
import { OfferCard } from "../Components/Home Page/OfferCard";
import { ViewImg } from "../Components/Home Page/ViewImg";


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
      <ViewImg />
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
