import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Header() {
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ccc' }}>
            <Link to="/"><h2>ElectroShop</h2></Link>
            <Link to="/cart">Cart ({cartCount})</Link>
        </header>
    );
}

export default Header;
