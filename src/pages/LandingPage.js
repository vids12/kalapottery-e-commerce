import { Link } from "react-router-dom";
export function LandingPage() {
  return (
    <>
      <section style={{ textAlign: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1527642220350-24155bae0505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1437&q=80"
          alt="homepage-img"
          className="home-img"
        />
      </section>
      <section className="card-div">
        <div className="category-card">
          <img
            src="https://images.unsplash.com/photo-1610128361323-6e941c97f023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=335&q=80"
            alt="procelain-pots"
          />
          <h4 className="card-data">Procelain Fin Vases</h4>
          <p className="card-data">Some Description</p>
          <Link to="/category" className="primary-btn">
            View More
          </Link>
        </div>
        <div className="category-card">
          <img
            src="https://images.unsplash.com/photo-1592062357348-07acb343764f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="ceramic-pots"
            className="category-img"
          />
          <h4 className="card-data">Ceramic Vases</h4>
          <p className="card-data">Some Description</p>
          <Link to="/category" className="primary-btn">
            View More
          </Link>
        </div>
        <div className="category-card">
          <img
            src="https://images.unsplash.com/photo-1549221495-83d3c5109d62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="glass-vases"
            className="category-img"
          />
          <h4 className="card-data">Glass Vases</h4>
          <p className="card-data">Some Description</p>
          <Link to="/category" className="primary-btn">
            View More
          </Link>
        </div>
      </section>
    </>
  );
}
