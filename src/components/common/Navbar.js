import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newlogo from '../../assets/images/logoo.png';
import '../../assets/styles/Navbar.css';
import SecondNavbar from './SecondNavbar'; // Import the new SecondNavbar component

const Navbar = ({ isLoggedIn }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdown === dropdownOpen ? null : dropdown);
  };

  return (
    <>
      <SecondNavbar /> {/* Add the SecondNavbar component here */}
      <nav className="navbar">
        <div className="title">
         <img src={newlogo} alt="Logo" />
          <span className='w1'>TrashIt</span>
        </div>
        <ul className="nav-items">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          {isLoggedIn ? (
            <>
              <li><a href="#what-we-do" onClick={(e) => handleScroll(e, 'what-we-do')}>How It Works</a></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </>
          ) : (
            <>
              <li className="dropdown">
                <Link to="/my-coins" onClick={() => toggleDropdown('coins')}>Coins</Link>
              </li>
              <li><Link to="/shop">Shop</Link></li>
              <li className="dropdown">
                <Link to="/mysubmission" onClick={() => toggleDropdown('submission')}>My Submission</Link>
              </li>
              <li className="dropdown">
                <a href="#submit-waste-section" onClick={(e) => handleScroll(e, 'submit-waste-section')} onMouseEnter={() => toggleDropdown('submit-waste')}>Submit Waste</a>
                <div className={`dropdown-content ${dropdownOpen === 'submit-waste' ? 'show' : ''}`}>
                  <Link to="/resident">Resident</Link>
                  <Link to="/commercial">Commercial</Link>
                  <Link to="/ewaste">E-Waste</Link>
                </div>
              </li>
              <li><Link to="/profile"><i className="fas fa-user"></i></Link></li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
