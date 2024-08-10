import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Home.css';
import HowitWorks from './HowItWorks';
import SubmitWaste from '../user/SubmitWaste';
import Card from './Card';
import Footer1 from '../common/Footer1';

// If using src directory
import bgVideo from '../../assets/videos/bg.mp4'; // Adjust the path

const Home = ({ isLoggedIn }) => {
  return (
    <div className="home">
      <div className="hero-container">
        <video autoPlay muted loop>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>TRASHIt</h1>
        <p className="slogan">TURN TRASH INTO CASH</p>
      </div>
      <div className='des'>
        <p>
          With a simple Appointment, We will give Cash for your Trash
        </p>
        {!isLoggedIn && (
          <div className="home-buttons">
            <Link to="/register" className="home-button">Explore Now!</Link>
          </div>
        )}
      </div>
      {!isLoggedIn && <HowitWorks />}
      <SubmitWaste />
      <Card />
      <Footer1 />
    </div>
  );
};

export default Home;
