import React, { useState } from 'react';
import '../../assets/styles/Feedback.css'; // Import the CSS file
import Lottie from 'lottie-react';
import FeedbackAnimation from '../../feedback.json';
import axios from 'axios'; // Import axios for making HTTP requests

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.rating) newErrors.rating = 'Please select a feedback rating';
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true);
      try {
        await axios.post('http://localhost:8080/api/feedback', formData);
        alert('Feedback submitted successfully!');
        setFormData({ name: '', email: '', message: '', rating: '' });
      } catch (error) {
        alert('Error submitting feedback');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div id="feedback">
      <div className="feedback-animation">
        <Lottie animationData={FeedbackAnimation} loop={true} />
      </div>
      <h2>We'd Love to Hear From You!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <div className="form-group rating-group">
          <label>How would you rate your experience?</label>
          <div className="rating-options">
            {[
              { emoji: '😡', title: 'Very Dissatisfied' },
              { emoji: '😠', title: 'Dissatisfied' },
              { emoji: '😐', title: 'Neutral' },
              { emoji: '😊', title: 'Satisfied' },
              { emoji: '😁', title: 'Very Satisfied' }
            ].map((item, index) => (
              <label
                key={index}
                className={`rating-option ${formData.rating === item.emoji ? 'selected' : ''}`}
                title={item.title}
                onClick={() => setFormData({ ...formData, rating: item.emoji })} // Update rating on click
              >
                <input
                  type="radio"
                  name="rating"
                  value={item.emoji}
                  checked={formData.rating === item.emoji}
                  onChange={handleChange}
                  className="visually-hidden"
                />
                {item.emoji}
              </label>
            ))}
          </div>
          {errors.rating && <p className="error-message">{errors.rating}</p>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
};

export default Feedback;
