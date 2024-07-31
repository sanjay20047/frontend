import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/ViewCoins.css';
import Lottie from "lottie-react";
import PropTypes from 'prop-types';
import CoinAnime from '../../CoinAnime.json';
import ConvertCoins from './ConvertCoins'; // Import the ConvertCoins component

const ViewCoins = ({ totalCoins, transactions = [] }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showConvertCoins, setShowConvertCoins] = useState(false);

  const handleConvertCoinsClick = () => {
    setShowConvertCoins(true);
  };

  const handleRedeemNowClick = () => {
    navigate('/shop'); // Navigate to the Shop page
  };

  return (
    <div className="view-coins-page">
      <div className="left-side">
        <div className="coin-display">
          <div className="coin-graphic">
            <Lottie animationData={CoinAnime} />
          </div>
          <h2>Total Coins: {totalCoins}</h2>
        </div>
        <div className="coin-buttons">
          <button className="redeem-button" onClick={handleRedeemNowClick}>Redeem Now</button>
          <button className="convert-button" onClick={handleConvertCoinsClick}>Convert Coins</button>
        </div>
      </div>
      <div className="activity-container">
        <h3>Your Activities</h3>
        {transactions.length === 0 ? (
          <p>No activities found.</p>
        ) : (
          transactions.slice(0, 5).map((transaction, index) => (
            <div key={index} className="transaction">
              <p>Date: {transaction.date}</p>
              <p>Amount: {transaction.amount} Coins</p>
              <p>Type: {transaction.type}</p>
            </div>
          ))
        )}
      </div>
      {/* ConvertCoins section */}
      {showConvertCoins && (
        <div className="convert-coins-container">
          <ConvertCoins />
        </div>
      )}
    </div>
  );
};

// Define prop types
ViewCoins.propTypes = {
  totalCoins: PropTypes.number.isRequired,
  transactions: PropTypes.array
};

// Default props
ViewCoins.defaultProps = {
  transactions: []
};

export default ViewCoins;