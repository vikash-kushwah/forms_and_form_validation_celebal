import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css';

const UserForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  
  const countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];
  const cities = {
    India: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'],
    USA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
    UK: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds'],
    Canada: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
    Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      tempErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      tempErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.username.trim()) {
      tempErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.password.trim()) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!formData.phoneCode.trim() || !formData.phoneNumber.trim()) {
      tempErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      tempErrors.phone = 'Invalid phone number';
      isValid = false;
    }

    if (!formData.country) {
      tempErrors.country = 'Country is required';
      isValid = false;
    }

    if (!formData.city) {
      tempErrors.city = 'City is required';
      isValid = false;
    }

    if (!formData.panNo.trim()) {
      tempErrors.panNo = 'PAN number is required';
      isValid = false;
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.panNo)) {
      tempErrors.panNo = 'Invalid PAN number';
      isValid = false;
    }

    if (!formData.aadharNo.trim()) {
      tempErrors.aadharNo = 'Aadhar number is required';
      isValid = false;
    } else if (!/^\d{12}$/.test(formData.aadharNo)) {
      tempErrors.aadharNo = 'Invalid Aadhar number';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/success', { state: { formData } });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group password-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group phone-group">
          <input
            type="text"
            name="phoneCode"
            placeholder="Code"
            value={formData.phoneCode}
            onChange={handleChange}
            className="phone-code"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="phone-number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>

        <div className="form-group">
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            disabled={!formData.country}
          >
            <option value="">Select City</option>
            {formData.country && cities[formData.country].map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <span className="error">{errors.city}</span>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="panNo"
            placeholder="PAN Number"
            value={formData.panNo}
            onChange={handleChange}
          />
          {errors.panNo && <span className="error">{errors.panNo}</span>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="aadharNo"
            placeholder="Aadhar Number"
            value={formData.aadharNo}
            onChange={handleChange}
          />
          {errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
