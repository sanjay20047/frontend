// src/components/Cart.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../../assets/styles/Cart.css'; // Import the CSS file

const Cart = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const handleQuantityChange = (productName, change) => {
        const updatedCart = cart.map(item => {
            if (item.productName === productName) {
                const newQuantity = (item.quantity || 0) + change;
                if (newQuantity > 0) {
                    return { ...item, quantity: newQuantity };
                } else {
                    return null;
                }
            }
            return item;
        }).filter(item => item !== null);

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const handleRemove = (productName) => {
        handleQuantityChange(productName, -1);
    };

    const calculateTotals = () => {
        const totals = cart.reduce((acc, item) => {
            if (acc[item.productName]) {
                acc[item.productName].quantity += 1;
                acc[item.productName].totalCoins = acc[item.productName].quantity * acc[item.productName].coins;
            } else {
                acc[item.productName] = {
                    ...item,
                    quantity: 1,
                    totalCoins: item.coins
                };
            }
            return acc;
        }, {});

        const totalCoins = Object.values(totals).reduce((sum, item) => sum + item.totalCoins, 0);

        return { totals, totalCoins };
    };

    const { totals, totalCoins } = calculateTotals();

    const handleCheckout = () => {
        localStorage.setItem('cartTotal', totalCoins); // Save total coins to localStorage
        navigate('/payment'); // Navigate to payment page
    };

    return (
        <div id="cart">
            <h2>Cart</h2>
            <div className="cart-items">
                {Object.values(totals).length === 0 ? (
                    <p>No items in the cart</p>
                ) : (
                    Object.values(totals).map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img src={item.img} alt={item.productName} />
                            <p>{item.productName}</p>
                            <small>Coins needed: {item.totalCoins}</small>
                            <div className="quantity-controls">
                                <span className="quantity-btn" onClick={() => handleQuantityChange(item.productName, -1)}>-</span>
                                <p>Quantity: {item.quantity || 0}</p>
                                <span className="quantity-btn" onClick={() => handleQuantityChange(item.productName, 1)}>+</span>
                            </div>
                            <button className="remove-btn" onClick={() => handleRemove(item.productName)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
            <div className="cart-total1">
                <h3>Subtotal: {totalCoins} Coins</h3>
                <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
