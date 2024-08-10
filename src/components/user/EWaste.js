import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/EWaste.css';
import eWasteImage from '../../assets/images/ewaste.jpg'; // Update the path as needed

const EWaste = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showForm]);

  const handleStartServiceClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/thanks'); // Redirect to the Thanks page
  };

  return (
    <div className="ewaste-container">
      <section className="hero-section">
        <img src={eWasteImage} alt="E-Waste Management" className="hero-image" />
        <div className="hero-text">
          <h1>E-Waste Management</h1>
          <p>
            Efficiently manage your electronic waste with our specialized e-waste pickup service. Schedule your pickup and ensure responsible disposal of your electronics.
          </p>
          <button className="start-service-button" onClick={handleStartServiceClick}>
            Start Service
          </button>
        </div>
      </section>

      {showForm && (
        <section className="form-section">
          <div className="form-card" ref={formRef}>
            <h2>Request Pickup</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="eWasteType">E-Waste Type:</label>
                <select id="eWasteType" name="eWasteType" required>
                  <option value="">Select...</option>
                  <option value="computer">Computer</option>
                  <option value="mobile">Mobile Phone</option>
                  <option value="appliances">Appliances</option>
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

export default EWaste;
