import React, { useState } from 'react';
import '../../assets/styles/ContactUs.css';
import Lottie from 'lottie-react';
import contactanime from '../../contact.json';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.text();
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const errorText = await response.text();
        alert('Error: ' + errorText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-content">
        <div className="contact-form-container">
          <h1>Contact Us</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <div className="contact-icons">
            <a href="https://www.facebook.com" className="icon-link" aria-label="Facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="icon-link" aria-label="Twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" className="icon-link" aria-label="Instagram">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" className="icon-link" aria-label="LinkedIn">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="lottie-container">
          <Lottie animationData={contactanime} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
