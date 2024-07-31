import React, { useState, useRef } from 'react';
import '../../assets/styles/Commercial.css';
import commercial from '../../assets/images/commercial1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Commercial = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleStartServiceClick = () => {
    setShowForm(true);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="commercial-container">
      <div className="commercial-content">
        <div className="text-and-image">
          <div className="commercial-text">
            <h2>Commercial Waste Management</h2>
            <p>
              Manage your commercial waste efficiently with our reliable and eco-friendly service. We offer tailored solutions for businesses to ensure responsible waste collection, minimizing environmental impact. Schedule pickups at your convenience and contribute to a greener community.
            </p>
            <button className="start-service-button" onClick={handleStartServiceClick}>Start Service</button>
            <button className="contact-service-button"><FontAwesomeIcon icon={faPhone} /> 123456789</button>
          </div>
          <div className="commercial-image">
            <img src={commercial} alt="Commercial Pickup" />
          </div>
        </div>
        <div className="additional-info-container">
          <h3>Why Choose Our Service?</h3>
          <p>
            Our commercial waste management service is designed to meet the unique needs of businesses. By choosing us, you support eco-friendly practices and receive rewards for your recycling efforts. Join us in making a positive impact on the environment and your community.
          </p>
          <h4>Eco-Friendly Practices</h4>
          <p>
            <img src={commercial} alt="Eco-Friendly Practices" className="info-image" />
            We employ sustainable methods to manage your commercial waste. From reducing carbon emissions to recycling materials, we are committed to environmental protection.
          </p>
          <h4>Convenient Scheduling</h4>
          <p>
            <img src={commercial} alt="Convenient Scheduling" className="info-image" />
            Our flexible scheduling options allow you to arrange pickups at your convenience. Whether you need regular service or a one-time collection, we accommodate your business needs.
          </p>
          <h4>Reward System</h4>
          <p>
            <img src={commercial} alt="Reward System" className="info-image" />
            Earn rewards for every pickup and recycling effort. Our reward system encourages and recognizes your commitment to a cleaner environment.
          </p>
          <h4>Community Impact</h4>
          <p>
            <img src={commercial} alt="Community Impact" className="info-image" />
            By using our service, you contribute to the well-being of your community. Together, we can reduce waste, promote recycling, and create a healthier environment.
          </p>
        </div>
        <div className="form-container-wrapper">
          <div className="form-container" ref={formRef}>
            <h3>Choose Your Waste Solution</h3>
            <form>
              <div className="form-group">
                <label htmlFor="solutionType">Select Service Type:</label>
                <select id="solutionType" name="solutionType" required>
                  <option value="">Select...</option>
                  <option value="office">For Office</option>
                  <option value="retail">For Retail</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
                <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
              </div>
              <div className="form-group-half">
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" required />
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" required />
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                </div>
              </div>
              <div className="form-group-half">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" required />
                  <FontAwesomeIcon icon={faPhone} className="input-icon" />
                </div>
              </div>
              <div className="sb">
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
