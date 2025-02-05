import React, { useState } from 'react';
import './css/LoginSignup.css';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreed: false
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!formData.agreed) {
      alert('You must agree to the terms before continuing.');
      return;
    }
    console.log('Form submitted:', formData);
    // Proceed with backend API request here
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleChange} 
              required
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
              required
            />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <span style={{ cursor: "pointer", color: "blue" }}>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input 
            type="checkbox" 
            id="agree" 
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
          />
          <label htmlFor="agree">By continuing, I agree to the terms of use and privacy policy.</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

