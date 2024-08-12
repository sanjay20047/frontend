import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/EWaste.css';
import eWasteImage from '../../assets/images/ewaste.jpg'; // Update the path as needed

const EWaste = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: '', // Changed from eWasteType to serviceType
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
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showForm]);

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
      setSuccessMessage('Request submitted successfully!');
      setErrorMessage('');
      setFormData({
        serviceType: '', // Reset to initial state
        address: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
      navigate('/thanks'); // Redirect to the Thanks page
    } catch (error) {
      console.error('Error submitting e-waste request:', error);
      setErrorMessage('Submission failed. Please try again.');
      setSuccessMessage('');
    }
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
                <label htmlFor="serviceType">Service Type:</label> {/* Changed label */}
                <select
                  id="serviceType"
                  name="serviceType" // Changed name attribute
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="computer">Computer</option>
                  <option value="mobile">Mobile Phone</option>
                  <option value="appliances">Appliances</option>
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

export default EWaste;
