import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

function Checkout() {
    const { cartItems, clearCart } = useContext(CartContext);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    const handlePayment = () => {
        // Simulate payment process
        setTimeout(() => {
            alert('Payment Successful! Your order has been placed.');
            setOrderPlaced(true);
            clearCart();
        }, 1000);
    };

    if (orderPlaced) return <h2>Thank you! Your order has been placed.</h2>;

    return (
        <div>
            <h1>Checkout</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item._id} style={{ marginBottom: '10px' }}>
                            <h3>{item.name}</h3>
                            <p>Qty: {item.qty}</p>
                            <p>Price: ${item.price * item.qty}</p>
                        </div>
                    ))}
                    <h2>Total: ${total}</h2>
                    <button onClick={handlePayment}>Pay Now</button>
                </div>
            )}
        </div>
    );
}

export default Checkout;
