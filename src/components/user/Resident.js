import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/Resident.css';
import residentImage from '../../assets/images/resident.png';

const Resident = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    if (showForm && formRef.current) {
      // Scroll to the form section after it is rendered
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showForm]); // Dependency array to trigger scroll when showForm changes

  const handleStartServiceClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/thanks'); // Redirect to the Thanks page
  };

  return (
    <div className="resident-container">
      <section className="hero-section">
        <img src={residentImage} alt="Residential Service" className="hero-image" />
        <div className="hero-text">
          <h1>Residential Garbage Pickup</h1>
          <p>
            Manage your household waste efficiently with our eco-friendly pickup service. Schedule pickups at your convenience and earn rewards for recycling. Join us for a cleaner community.
          </p>
          <button className="start-service-button" onClick={handleStartServiceClick}>
            Start Service
          </button>
        </div>
      </section>

      {showForm && (
        <section className="form-section">
          <div className="form-card" ref={formRef}>
            <h2>Request Service</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="serviceType">Service Type:</label>
                <select id="serviceType" name="serviceType" required>
                  <option value="">Select...</option>
                  <option value="home">Home</option>
                  <option value="organization">Organization</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default Resident;
