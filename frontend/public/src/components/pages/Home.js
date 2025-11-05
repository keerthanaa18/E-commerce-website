import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Electronics & Gadgets</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {products.map(product => (
                    <div key={product._id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <Link to={`/product/${product._id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Home() {
    const { cartItems, addToCart } = useContext(CartContext);

    return (
        <div>
            <h1>Electronics & Gadgets</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {products.map(product => (
                    <div key={product._id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
