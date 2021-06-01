import { Link } from "react-router-dom";

export function LandingPageCard(){
    return <section className="category-div">
    <div className="category-card">
      <img
        src="https://cdn.shopify.com/s/files/1/0535/8049/7061/files/banner6.1.jpg?v=1612837951"
        alt="procelain-pots" className="category-img"
      />
      <h4 className="card-data">Procelain Fin Vases</h4>
      <p className="card-data">Made from durable porcelain, these ribbed vases serve as excellent decor and are reminiscent of the streamlined design of the Bauhaus movement.</p>
      <Link to="/products"><button className="primary-btn">View More</button></Link>
    </div>
    <div className="category-card">
      <img
        src="https://cdn.shopify.com/s/files/1/0535/8049/7061/files/banner6.2.jpg?v=1612838054"
        alt="ceramic-pots"
        className="category-img"
      />
      <h4 className="card-data">Ceramic Vases</h4>
      <p className="card-data">These earthenware pieces are an effortless way to add artistry to flowers and plants—but we think that they also make an equally striking display on their own.</p>
      <Link to="/products"><button className="primary-btn">View More</button></Link>
    </div>
    <div className="category-card">
      <img
        src="https://cdn.shopify.com/s/files/1/0535/8049/7061/files/banner6.3.jpg?v=1612838248"
        alt="glass-vases"
        className="category-img"
      />
      <h4 className="card-data">Glass Vases</h4>
      <p className="card-data">The simple materials and shapes, as with these glass vases, make it easy to decorate tables and shelves with just a few key pieces.</p>
      <Link to="/products"><button className="primary-btn">View More</button></Link>
    </div>
  </section>
}