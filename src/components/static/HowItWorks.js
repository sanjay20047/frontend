import React from 'react';
import '../../assets/styles/HowItWorks.css'; // Ensure this CSS file exists
import hiw from '../../assets/images/vectorizer.svg';

const HowItWorks = () => {
  return (
    <div id="what-we-do" className="how-it-works">
      <div className="content-container">
        <img 
          src={hiw}
          alt="Recycling Process" 
          className="how-it-works-image" 
        />
        <div className="text-container">
          <h2 className="section-title">What we do?</h2>
          <p className="section-description">
            We provide a platform where you can easily submit your waste for recycling. Our mission is to promote environmental sustainability by ensuring that waste is properly collected and sent to recycling plants. By participating, you not only help the environment but also earn rewards that can be converted into money or used to purchase products from our shop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
