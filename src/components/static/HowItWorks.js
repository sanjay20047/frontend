import React from 'react';
import '../../assets/styles/HowItWorks.css'; // Ensure this CSS file exists
import hiw from '../../assets/images/vectorizer.svg';
import { useNavigate } from 'react-router-dom'; // Corrected import

const HowItWorks = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/scroll');
  };

  return (
    <div id="what-we-do" className="how-it-works">
      <div className="content-container">
        <img 
          src={hiw}
          alt="Recycling Process" 
          className="how-it-works-image" 
        />
        <div className="text-container">
          <h2 className="section-title">What We Do?</h2>
          <p className="section-description">
            Our service provides a seamless way to manage your waste with eco-friendly practices. We offer convenient scheduling, reward systems, and a commitment to reducing environmental impact. By choosing us, you contribute to a cleaner and greener community.
          </p>
          <button onClick={handleButtonClick}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
