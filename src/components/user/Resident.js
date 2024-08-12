import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/styles/Resident.css';
import residentImage from '../../assets/images/resident.png';

const Resident = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: '',
    address: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/waste-management', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSuccessMessage(response.data);
      setErrorMessage('');
      setFormData({
        serviceType: '',
        address: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
      navigate('/thanks'); // Redirect to the Thanks page
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      setErrorMessage('Service request submission failed');
      setSuccessMessage('');
    }
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
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="home">Home</option>
                  <option value="organization">Organization</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </section>
      )}
    </div>
  );
};

export default Resident;
