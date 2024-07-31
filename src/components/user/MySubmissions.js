import React from 'react';
import '../../assets/styles/MySubmissions.css';
import mi from '../../assets/images/bottle.avif';
import mi1 from '../../assets/images/phone.jpg';
import mi2 from '../../assets/images/paper.jpg';
import mi3 from '../../assets/images/glass.avif';
import { FaClock, FaBoxOpen } from 'react-icons/fa';
const MySubmission = () => {
  // Mock data for visual representation
  const currentSubmissions = [
      {
          id: 1,
          title: 'Plastic Bottles',
          description: 'Submitted 10 plastic bottles for recycling.',
          date: '2024-07-20',
          quantity: 10,
          time: '2:00 PM',
          imageUrl: mi
      },
      {
          id: 2,
          title: 'Electronic Waste',
          description: 'Submitted an old laptop and mobile phone.',
          date: '2024-07-18',
          quantity: 2,
          time: '11:00 AM',
          imageUrl: mi1
      }
  ];

  const pastSubmissions = [
      {
          id: 1,
          title: 'Paper Waste',
          description: 'Submitted 5 kg of old newspapers.',
          date: '2024-06-25',
          quantity: 5,
          time: '9:30 AM',
          imageUrl: mi2
      },
      {
          id: 2,
          title: 'Glass Bottles',
          description: 'Submitted 8 glass bottles.',
          date: '2024-05-30',
          quantity: 8,
          time: '1:15 PM',
          imageUrl: mi3
      }
  ];

  return (
      <div className="my-submission">
          <div className="section current-submissions">
              <h2>Current Submissions</h2>
              {currentSubmissions.length === 0 ? (
                  <p>No current submissions.</p>
              ) : (
                  <div className="submissions-grid">
                      {currentSubmissions.map((submission) => (
                          <div key={submission.id} className="submission-card">
                              <img src={submission.imageUrl} alt={submission.title} className="submission-image" />
                              <div className="submission-content">
                                  <h3>{submission.title}</h3>
                                  <p>{submission.description}</p>
                                  <div className="submission-details">
                                      <div className="detail-item">
                                          <FaBoxOpen />
                                          <p>Quantity: {submission.quantity}</p>
                                      </div>
                                      <div className="detail-item">
                                          <FaClock />
                                          <p>Time: {submission.time}</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="submission-date">
                                  <p>{new Date(submission.date).toLocaleDateString()}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              )}
          </div>
          <div className="section past-submissions">
              <h2>Past Submissions</h2>
              {pastSubmissions.length === 0 ? (
                  <p>No past submissions.</p>
              ) : (
                  <div className="submissions-grid">
                      {pastSubmissions.map((submission) => (
                          <div key={submission.id} className="submission-card">
                              <img src={submission.imageUrl} alt={submission.title} className="submission-image" />
                              <div className="submission-content">
                                  <h3>{submission.title}</h3>
                                  <p>{submission.description}</p>
                                  <div className="submission-details">
                                      <div className="detail-item">
                                          <FaBoxOpen />
                                          <p>Quantity: {submission.quantity}</p>
                                      </div>
                                      <div className="detail-item">
                                          <FaClock />
                                          <p>Time: {submission.time}</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="submission-date">
                                  <p>{new Date(submission.date).toLocaleDateString()}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              )}
          </div>
      </div>
  );
};

export default MySubmission;