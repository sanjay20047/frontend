// src/components/Payment.js

import React, { useState, useEffect } from 'react';
import '../../assets/styles/Payment.css'; // Import the CSS file
import Lottie from "lottie-react";
import CoinAnime from '../../CoinAnime.json';; // Update this path to where your Lottie file is

const Payment = () => {
    const [coins, setCoins] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const availableCoins = parseInt(localStorage.getItem('availableCoins'), 10) || 0;
        setCoins(availableCoins);

        const cartTotal = parseInt(localStorage.getItem('cartTotal'), 10) || 0;
        setTotal(cartTotal);
    }, []);

    const handleCheckout = (event) => {
        event.preventDefault();
        if (coins >= total) {
            alert('Checkout successful!');
            localStorage.setItem('availableCoins', coins - total);
            // Redirect to another page if needed
        } else {
            alert('Not enough coins for checkout.');
        }
    };

    return (
        <div id="payment">
            <div className="coin-container">
                <Lottie animationData={CoinAnime} loop={true} />
            </div>
            <h2>Checkout with Coins</h2>
            <div className="info">
                <p>Available Coins: {coins}</p>
                <p>Total Amount: {total} Coins</p>
            </div>
            <form onSubmit={handleCheckout}>
                <button type="submit" className="submit-btn">Confirm Payment</button>
            </form>
        </div>
    );
};

export default Payment;
