import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [password, setPassword] = useState('');
    const [showPasswordInput, setShowPasswordInput] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [tempProduct, setTempProduct] = useState(null);
    const [passwordError, setPasswordError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products', error);
        }
    };

    const handleProductSubmit = async (e) => {
        e.preventDefault();
        setTempProduct({ name, price });
        setShowPasswordInput(true);
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        if (password === 'Heat1234!') {
            setIsPasswordCorrect(true);
            setPasswordError('');
            await addProduct();
        } else {
            setPasswordError('Incorrect password. Please try again.');
        }
    };

    const addProduct = async () => {
        console.log('addProduct function called');
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price, password })
        };

        try {
            console.log('Sending request to:', 'http://localhost:3001/api/products');
            const response = await fetch('http://localhost:3001/api/products', options);
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Server response:', data);
            setProducts(prevProducts => [...prevProducts, data]);
            setPopupMessage(`${name} successfully added`);
            setShowPopup(true);
            setName('');
            setPrice('');
            setPassword('');
            setShowAddProduct(false);
            setShowPasswordInput(false);
            setTempProduct(null);
            setPasswordError('');
        } catch (error) {
            console.error('Error adding product:', error);
            setPasswordError('Error adding product. Please try again.');
        }
    };

    const filteredProducts = products.filter(product =>
        product && product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h2>The History of Apple</h2>
            
            <input
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            <h3>
                Add Product 
                <span 
                    onClick={() => setShowAddProduct(!showAddProduct)}
                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                >
                    {showAddProduct ? '▲' : '▼'}
                </span>
            </h3>
            
            {showAddProduct && !showPasswordInput && (
                <form onSubmit={handleProductSubmit} className="product-form">
                    <input 
                        placeholder='Name' 
                        name='name' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="input-field"
                    />
                    <input 
                        placeholder='Price' 
                        name='price' 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        className="input-field"
                    />
                    <button type='submit' className="submit-button">Next</button>
                </form>
            )}

            {showPasswordInput && (
                <form onSubmit={handlePasswordSubmit} className="password-form">
                    <input 
                        type="password"
                        placeholder='Password' 
                        name='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="input-field"
                    />
                    <button type='submit' className="submit-button">Add Product</button>
                    {passwordError && <p className="error-message">{passwordError}</p>}
                </form>
            )}
            
            {showPopup && (
                <Popup 
                    message={popupMessage} 
                    onClose={() => setShowPopup(false)} 
                />
            )}
            
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <div className='card' key={item.id}>
                            {isPasswordCorrect || item !== tempProduct ? (
                                <>
                                    <h2>{item.name}</h2>
                                    <h4>{item.price}</h4>
                                    <Link to={`/product/${item.id}`}>View</Link>
                                </>
                            ) : (
                                <p>Product info hidden. Enter correct password to view.</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </>
    );
};

export default Shop;