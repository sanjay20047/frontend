import React from 'react';
import '../../assets/styles/Thanks.css'; // Import the CSS file

const Thanks = () => {
  return (
    <div className="thanks-container">
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62661.39146817121!2d76.98513919999999!3d11.0133248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology%20-!5e0!3m2!1sen!2sin!4v1723050233110!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 'none' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <div className="text-content">
        <h1>Thank You!</h1>
        <p>Thank you for choosing our service. </p>
        <p>You can view our Pickup agents location!</p>
      </div>
    </div>
  );
};

export default Thanks;
