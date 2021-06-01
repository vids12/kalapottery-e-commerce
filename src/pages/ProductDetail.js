import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductDetailDiv } from "../Components/ProductDetailDiv";

export function ProductDetail() {
  const [product, setShowProduct] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    (async function () {
      const response = await axios.get(`https://e-comm-backend.vids18.repl.co/products/${productId}`);
      setShowProduct(response.data.product);
    })();
  });
  return (
    <>
      {product && <ProductDetailDiv product={product} />}
      <Link to="/products"> <button className="primary-btn">See All</button> </Link>
    </>
  );
}
