import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/Commercial.css'; // Ensure this path is correct
import img from '../../assets/images/Commercial.jpg'; // Ensure this path is correct

const Commercial = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: '',
    address: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [commercials, setCommercials] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    // Fetch commercials data when the component mounts
    const fetchCommercials = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/commercial');
        setCommercials(response.data);
      } catch (error) {
        console.error('Error fetching commercials:', error);
      }
    };
    
    fetchCommercials();
  }, []);

  const handleStartServiceClick = () => {
    setShowForm(true);
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/waste-management', formData);
      setSubmissionStatus({ success: true, message: 'Submission successful!' });
      console.log('Commercial data submitted:', response.data);
      setFormData({
        serviceType: '',
        address: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error submitting commercial data:', error);
      setSubmissionStatus({ success: false, message: 'Submission failed. Please try again.' });
    }
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
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="regular">Regular Pickup</option>
                  <option value="on-demand">On-Demand Pickup</option>
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
              <button type="submit" className="submit-button">Submit</button>
            </form>
            {submissionStatus && (
              <p className={submissionStatus.success ? 'success-message' : 'error-message'}>
                {submissionStatus.message}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="commercial-list">
        <h2>Commercial Requests</h2>
        <ul>
          {commercials.map((commercial) => (
            <li key={commercial.id}>
              <p><strong>Service Type:</strong> {commercial.serviceType}</p>
              <p><strong>Address:</strong> {commercial.address}</p>
              <p><strong>First Name:</strong> {commercial.firstName}</p>
              <p><strong>Last Name:</strong> {commercial.lastName}</p>
              <p><strong>Email:</strong> {commercial.email}</p>
              <p><strong>Phone:</strong> {commercial.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Commercial;
