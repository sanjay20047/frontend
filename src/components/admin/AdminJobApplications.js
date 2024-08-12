import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/styles/AdminJobApplications.css';

const AdminJobApplications = () => {
  const [jobApplications, setJobApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/jobs/applications');
        setJobApplications(response.data);
      } catch (err) {
        setError('Error fetching job applications');
      } finally {
        setLoading(false);
      }
    };

    fetchJobApplications();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="admin-job-applications">
      <h2>Job Applications</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {jobApplications.map(application => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.firstName}</td>
              <td>{application.lastName}</td>
              <td>{application.phoneNumber}</td>
              <td>{application.email}</td>
              <td>{application.jobTitle}</td>
              <td><a href={`data:application/pdf;base64,${btoa(String.fromCharCode(...new Uint8Array(application.resume)))}`} download={`resume-${application.id}.pdf`}>Download Resume</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminJobApplications;
