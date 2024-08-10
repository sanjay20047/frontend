import React, { useState } from 'react';
import '../../assets/styles/ConvertCoins.css';
import credit from '../../assets/images/razor.jpeg';
import bitcoin from '../../assets/images/money.webp';

const FIXED_CONVERSION_RATE = 30; // Conversion rate is fixed

const ConvertCoins = () => {
  const [coins, setCoins] = useState(1); // Default value is 1
  const [convertedValue, setConvertedValue] = useState(FIXED_CONVERSION_RATE); // Default conversion value

  const handleCoinsChange = (e) => {
    setCoins(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = coins * FIXED_CONVERSION_RATE;
    setConvertedValue(result);
  };

  return (
    <div className="convert-coins">
      <h1>Convert Coins</h1>
      <form className="convert-form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter coins to convert"
          value={coins}
          onChange={handleCoinsChange}
          className="input-field"
        />
        <input
          type="number"
          value={convertedValue}
          readOnly
          className="input-field"
        />
        <button type="submit" className="action-button">Convert</button>
      </form>
      <div className="payment-options">
        <h2>Payment Options</h2>
        <div className="payment-cards">
          <div className="payment-card">
            <input type="radio" id="Razor-pay" name="payment-method" value="Razor-pay" />
            <label htmlFor="credit-card">
              <img src={credit} alt="Razor-pay" />
              <span>Razor Pay</span>
            </label>
          </div>
          <div className="payment-card">
            <input type="radio" id="cash" name="payment-method" value="cash" />
            <label htmlFor="cash">
              <img src={bitcoin} alt="cash" />
              <span>Recieve Cash</span>
            </label>
          </div>
        </div>
        <button type="submit" className="action-button">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default ConvertCoins;