import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    setTimeout(() => {
      navigate('/');
    }, 1500);
    return <div className="success-container error">No data available. Redirecting to form...</div>;
  }

  return (
    <div className="success-container">
      <h2>Registration Successful!</h2>
      <div className="user-details">
        <div className="detail-group">
          <label>First Name:</label>
          <span>{formData.firstName}</span>
        </div>
        <div className="detail-group">
          <label>Last Name:</label>
          <span>{formData.lastName}</span>
        </div>
        <div className="detail-group">
          <label>Username:</label>
          <span>{formData.username}</span>
        </div>
        <div className="detail-group">
          <label>Email:</label>
          <span>{formData.email}</span>
        </div>
        <div className="detail-group">
          <label>Phone:</label>
          <span>{formData.phoneCode} {formData.phoneNumber}</span>
        </div>
        <div className="detail-group">
          <label>Country:</label>
          <span>{formData.country}</span>
        </div>
        <div className="detail-group">
          <label>City:</label>
          <span>{formData.city}</span>
        </div>
        <div className="detail-group">
          <label>PAN Number:</label>
          <span>{formData.panNo}</span>
        </div>
        <div className="detail-group">
          <label>Aadhar Number:</label>
          <span>{formData.aadharNo}</span>
        </div>      </div>
      <button 
        className="back-btn" 
        onClick={() => navigate('/')}
      >
        Back to Form
      </button>
    </div>
  );
};

export default Success;
