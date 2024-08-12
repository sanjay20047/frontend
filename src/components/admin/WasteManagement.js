import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/styles/WasteManagement.css'; // Ensure you have this CSS file

const WasteManagement = () => {
  const [wasteData, setWasteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWasteData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/waste-management'); // Adjust URL if needed
        setWasteData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching waste data:', error);
        setError('Failed to load waste management data.');
        setLoading(false);
      }
    };

    fetchWasteData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="waste-management">
      <h1>Waste Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Type</th>
            <th>Address</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {wasteData.length > 0 ? (
            wasteData.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.serviceType}</td>
                <td>{item.address}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WasteManagement;
