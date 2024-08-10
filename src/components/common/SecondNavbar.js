import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/SecondNavbar.css';

const SecondNavbar = () => {
    return (
        <div className="second-navbar">
            <ul className="second-nav-items">
                <li><Link to="/job">Apply Jobs</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
        </div>
    );
};

export default SecondNavbar;
