import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product._id}`}>View Details</Link>
        </div>
    );
}

export default ProductCard;
import ProductCard from '../components/ProductCard';

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
  {products.map(product => <ProductCard key={product._id} product={product} />)}
</div>
