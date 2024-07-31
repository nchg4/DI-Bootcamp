import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Product = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/products/${id}`)
                if (!res.ok) {
                    throw new Error('Failed to fetch product')
                }
                const data = await res.json()
                setProduct(data[0])  // Set the first item in the array as the product
            } catch (error) {
                console.error('Error fetching product:', error)
            }
        }
        fetchProduct()
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <>
            <h2>Product Details</h2>
            <div>
                <h1>{product.name}</h1>
                <h2>${product.price.toFixed(2)}</h2>
                <p>Product ID: {product.id}</p>
                <Link to='/'>Continue Browsing</Link>
            </div>
        </>
    );
};

export default Product;