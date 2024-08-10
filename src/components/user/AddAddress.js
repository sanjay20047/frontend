import "../../assets/styles/AddAddress.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Assume userId is obtained from a context or a global state
        const userId = 1; // Replace with the actual user ID
    
        const addressData = {
            firstName,
            lastName,
            phoneNumber,
            street,
            city,
            state,
            postalCode,
            country
        };
    
        try {
            const response = await fetch(`http://localhost:8080/api/users/${userId}/address`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addressData)
            });
    
            if (response.ok) {
                navigate('/'); // Redirect to the home page after successful submission
            } else {
                // Handle errors
                alert('Failed to add address');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the address');
        }
    };
    

    return (
        <div className="add-address-container">
            <div className="add-address-form-container">
                <h2 className="heading">Add Address</h2>
                <form className="add-address-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="👤 First Name" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="👥 Last Name" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="📞 Phone Number" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="🏠 Street" 
                        value={street} 
                        onChange={(e) => setStreet(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="🏙 City" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="🏛 State" 
                        value={state} 
                        onChange={(e) => setState(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="📬 Postal Code" 
                        value={postalCode} 
                        onChange={(e) => setPostalCode(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="🌍 Country" 
                        value={country} 
                        onChange={(e) => setCountry(e.target.value)} 
                        required 
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddAddress;