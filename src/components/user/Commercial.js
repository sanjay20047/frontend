import React, { useState, useRef } from 'react';
import '../../assets/styles/Commercial.css'; // Ensure this path is correct
import img from '../../assets/images/Commercial.jpg'; // Ensure this path is correct

const Commercial = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleStartServiceClick = () => {
    setShowForm(true);
    // Use setTimeout to ensure form is rendered before scrolling
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Adjust the timeout duration if needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="commercial-container">
      <div className="hero-section">
        <img src={img} alt="Commercial Waste Management" className="hero-image" />
        <div className="hero-text">
          <h1>Commercial Waste Management</h1>
          <p>We offer tailored waste management solutions for businesses. Click below to start the service and fill out the form.</p>
          <button className="start-service-button" onClick={handleStartServiceClick}>
            Start Service
          </button>
        </div>
      </div>

      {showForm && (
        <div className="form-section">
          <div className="form-card" ref={formRef}>
            <h2>Fill the Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="serviceType">Service Type:</label>
                <select id="serviceType" name="serviceType" required>
                  <option value="">Select...</option>
                  <option value="regular">Regular Pickup</option>
                  <option value="on-demand">On-Demand Pickup</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="businessName">Business Name:</label>
                <input type="text" id="businessName" name="businessName" required />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commercial;
