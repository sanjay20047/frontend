import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/Profile.css';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Profile = () => {
    const [user, setUser] = useState({
        email: 'sanjay@example.com',
        firstName: 'Sanjay',
        lastName: 'S',
        phone: '5737357278',
        addresses: [
            {
                street: '123 Main St',
                city: 'Anytown',
                state: 'Anystate',
                postalCode: '12345',
                country: 'USA'
            }
        ]
    });

    const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/100');
    const [activeSection, setActiveSection] = useState('details');
    const navigate = useNavigate();

    const handleLogout = () => {
        // Handle logout logic
        toast.success('Logged out successfully!');
        navigate('/login'); // Redirect to login page
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // For demonstration, let's just use the file URL
            const imageUrl = URL.createObjectURL(file);
            setProfilePicture(imageUrl);
            toast.success('Profile picture updated!');
        }
    };

    const handleWishlistClick = () => {
        // Redirect to the cart page
        navigate('/cart');
    };

    return (
        <div className="profile-container">
            <div className="profile-sidenav">
                <h2>Profile</h2>
                <ul>
                    <li onClick={() => setActiveSection('details')}>My Details</li>
                    <li onClick={() => setActiveSection('orders')}>Orders</li>
                    <li onClick={handleWishlistClick}>My Wishlist</li>
                    <li onClick={() => setActiveSection('notifications')}>Notifications</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>
            <div className="profile-content">
                <CSSTransition
                    in={activeSection === 'details'}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                >
                    <div className="profile-details">
                        <h2>Personal Information</h2>
                        <div className="profile-header">
                            <img src={profilePicture} alt="Profile" className="profile-picture" />
                            <input
                                type="file"
                                id="profile-picture-upload"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <button
                                className="upload-button"
                                onClick={() => document.getElementById('profile-picture-upload').click()}
                            >
                                Upload Picture
                            </button>
                        </div>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>First Name:</strong> {user.firstName}</p>
                        <p><strong>Last Name:</strong> {user.lastName}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <h2>Address</h2>
                        {user.addresses.length > 0 ? (
                            user.addresses.map((address, index) => (
                                <div key={index} className="address-card">
                                    <p><strong>Street:</strong> {address.street}</p>
                                    <p><strong>City:</strong> {address.city}</p>
                                    <p><strong>State:</strong> {address.state}</p>
                                    <p><strong>Postal Code:</strong> {address.postalCode}</p>
                                    <p><strong>Country:</strong> {address.country}</p>
                                </div>
                            ))
                        ) : (
                            <p>No addresses available.</p>
                        )}
                        <button className="edit-button" onClick={() => navigate('/add-address')}>Add Address</button>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={activeSection === 'orders'}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                >
                    <div className="profile-orders">
                        <h2>My Orders</h2>
                        <p>Order history will be displayed here.</p>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={activeSection === 'wishlist'}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                >
                    <div className="profile-wishlist">
                        <h2>My Wishlist</h2>
                        <p>Wishlist items will be displayed here.</p>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={activeSection === 'notifications'}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                >
                    <div className="profile-notifications">
                        <h2>Notifications</h2>
                        <p>Notification settings will be displayed here.</p>
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};

export default Profile;
