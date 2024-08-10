import axios from 'axios';
import React, { useState } from 'react';
import '../../assets/styles/Job.css';
import Lottie from 'react-lottie';
import jobAnimation from '../../job.json'; // Path to your Lottie JSON file

const Job = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    jobTitle: '',
    resume: null
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleApplyNowClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.resume && formData.resume.size > 10 * 1024 * 1024) { // Limit file size to 10MB
      setErrorMessage('Resume file is too large. Maximum size is 10MB.');
      return;
    }
  
    const formDataObj = new FormData();
    formDataObj.append('firstName', formData.firstName);
    formDataObj.append('lastName', formData.lastName);
    formDataObj.append('phoneNumber', formData.phoneNumber);
    formDataObj.append('email', formData.email);
    formDataObj.append('jobTitle', formData.jobTitle);
    if (formData.resume) {
      formDataObj.append('resume', formData.resume);
    } else {
      setErrorMessage('Resume is required');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/api/jobs/apply', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSuccessMessage(response.data);
      setErrorMessage('');
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      setErrorMessage('Application submission failed');
      setSuccessMessage('');
    }
  };
  

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jobAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="job-container">
      {!showForm ? (
        <div className="job-description">
          <div className="description-text">
            <h1>Join the TrashIt Team</h1>
            <p>
              TrashIt is dedicated to revolutionizing waste management with innovative solutions. Our mission is to make recycling and waste disposal more efficient and environmentally friendly. We are seeking talented individuals who share our vision and are passionate about making a difference.
            </p>
            <p>
              We offer a dynamic work environment, opportunities for professional growth, and the chance to be part of a forward-thinking team committed to sustainability.
            </p>
            <button onClick={handleApplyNowClick}>Apply Now</button>
          </div>
          <div className="description-image">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      ) : (
        <div className="job-form">
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Contact Details</h2>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-section">
              <h2>Job Details</h2>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-section">
              <h2>Upload Your Resume</h2>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Submit Application</button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default Job;
