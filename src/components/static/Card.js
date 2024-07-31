import React from 'react';
import '../../assets/styles/Card.css';
import i1 from '../../assets/images/select.jpeg';
import i2 from '../../assets/images/collecting.jpg';
import i3 from '../../assets/images/wastemanage.jpg';

const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div className="card">
          <img src={i1} alt="Search and select a service" className="card-image" />
          <div className="card-content">
            <h4>Search & select a service</h4>
            <p>Select a nearby service that suits your needs</p>
          </div>
        </div>
        <div className="card">
          <img src={i2} alt="Dispose of your trash" className="card-image" />
          <div className="card-content">
            <h4>Dispose of your trash</h4>
            <p>Ensure that your trash is properly prepared and ready for collection</p>
          </div>
        </div>
        <div className="card">
          <img src={i3} alt="Waste removal" className="card-image" />
          <div className="card-content">
            <h4>Waste removal</h4>
            <p>Our team collects your waste based on the service option you've chosen</p>
          </div>
        </div>
      </div>
      <div className="flow-line-container">
        <div className="flow-line"></div>
        <div className="flow-step" style={{ left: '0%' }}>
          <div className="diamond"><span className="diamond-content">1</span></div>
        </div>
        <div className="flow-step" style={{ left: '50%' }}>
          <div className="diamond"><span className="diamond-content">2</span></div>
        </div>
        <div className="flow-step" style={{ left: '100%' }}>
          <div className="diamond"><span className="diamond-content">3</span></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
