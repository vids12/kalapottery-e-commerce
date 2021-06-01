import { Link } from "react-router-dom";

export function OfferCard({ list }) {
    return <ul className="card-div">
    {list.map((obj) => {
      return (
          <li className="product-card" key={obj._id}>
            <Link to={`/products/${obj._id}`}>     
                <img src={obj.image} alt={obj.name} className="product-img" /> 
                <p className="card-title">{obj.name}</p>
                <p style={{ margin: "0.5rem",color: "#757b66",cursor:"text" }}>Rs. {obj.price}</p>
            </Link>  
        </li>
      );
    })}
  </ul>
}