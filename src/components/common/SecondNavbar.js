import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/SecondNavbar.css';

const SecondNavbar = () => {
    return (
        <div className="second-navbar">
            <ul className="second-nav-items">
                <li><a href="/job">Apply Jobs</a></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><a href="#section3">Contact Us</a></li>
            </ul>
        </div>
    );
};

export default SecondNavbar;
