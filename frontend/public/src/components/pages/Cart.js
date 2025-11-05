import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div>
            <h1>My Cart</h1>
            {cartItems.length === 0 ? <p>Cart is empty</p> : (
                <div>
                    {cartItems.map(item => (
                        <div key={item._id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
                            <h3>{item.name}</h3>
                            <p>Qty: {item.qty}</p>
                            <p>Price: ${item.price * item.qty}</p>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    ))}
                    <h2>Total: ${total}</h2>
                    <button onClick={clearCart}>Clear Cart</button>
                    <button onClick={() => alert('Checkout feature coming soon!')}>Checkout</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

<button onClick={() => navigate('/checkout')}>Checkout</button>
