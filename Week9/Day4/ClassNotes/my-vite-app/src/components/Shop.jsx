import { Link } from "react-router-dom";

const Shop = (props) => {
    return (
        <>
                <h1>Shop</h1>
                <div>
                    <h2>Product 1</h2>
                    <p>100$</p>
                    <Link to="/product/1">Buy</Link>
                </div>
                <div>
                    <h2>Product 2</h2>
                    <p>150$</p>
                    <Link to="/product/2">Buy</Link>
                </div>
        
        
        </>
    );
};

export default Shop;