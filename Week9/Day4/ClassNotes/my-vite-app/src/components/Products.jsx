import { Link, useParams, useNavigate } from "react-router-dom";

const Product = (props) => {
    const { id } = useParams();
    console.log("params=>", params);
    const navigate = useNavigate();

const toShop = () => {
    navigate("/shop");
}

    return (
        <>
            <h2>Product {params.id}</h2>
            <Link to="/shop">Back to Shop</Link>
            <div>
                <button onClick={()=>toShop()}>Navigate to shop</button>
            </div>
        </>
    );
};

export default Product;