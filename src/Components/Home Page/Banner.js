import { Link } from "react-router-dom";

export function Banner() {
    return <section className="banner">
        <div>
            <img src="//cdn.shopify.com/s/files/1/0535/8049/7061/files/banner8.1.jpg?v=1612840381" alt="-img" />
            <div className="inner-banner-1 inner-banner">
                <h3>Modern Shape: The Organic, Modern Forms Stand Out In Pure White.</h3>
                <Link to="/products"><button className="primary-btn">SHOP NOW</button></Link>
            </div>
        </div>
        <div>
            <img src="//cdn.shopify.com/s/files/1/0535/8049/7061/files/banner8.2.jpg?v=1612840457" />
            <div className="inner-banner-2 inner-banner">
                <h3>Versatile: It's A Best-Selling Collection For A Reason, With Sizes To Suit Every Arrangement.</h3>
                <Link to="/products"><button className="primary-btn">SHOP NOW</button></Link>
            </div>
        </div>
    </section>
}