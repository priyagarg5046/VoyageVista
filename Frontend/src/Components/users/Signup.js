<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css';

const Signup = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
=======
// import React from "react";

// function Signup() {
//     return (
//       <div>
//        Signup page
//       </div>
//     );
//   }
  
//   export default Signup;

  import React, { useState,useEffect } from 'react';
  import './Form.css';

const Signup = () => {
  const [currentPage, setCurrentPage] = useState(1);
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66

  const handleNext = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
<<<<<<< HEAD

  const handleInputChange = (e, setData) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4444/VoyageVista/user/register', signupData);
      alert(response.data.message || 'Signup successful!');
    } catch (error) {
      alert(error.response?.data.message || 'Signup failed. Please try again.');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4444/VoyageVista/user/login', loginData);
      alert(response.data.message || 'Login successful!');
    } catch (error) {
      alert(error.response?.data.message || 'Login failed. Please try again.');
    }
  };

=======
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
  useEffect(() => {
    document.body.classList.add('fullscreen-background');
    return () => {
      document.body.classList.remove('fullscreen-background');
    };
  }, []);

  return (
    <div className="book">
      <div className="flip-book">
        <div className={`flip ${currentPage === 1 ? 'active' : 'inactive'}`} id="p1">
          <div className="back">
            <div className="welcome-message">
<<<<<<< HEAD
              <h1 className="head">
                Welcome Back to <span className="span">VOYAGE VISTA !</span>
              </h1>
              <br />
              <h2 className="head">
                The adventure continues here. <span className="span">Log in</span> to pick up where you left off and
                chart new destinations!
              </h2>
            </div>
          </div>
          <div className="front">
            <h2 className="login-head">Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                value={signupData.username}
                onChange={(e) => handleInputChange(e, setSignupData)}
                required
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={signupData.email}
                onChange={(e) => handleInputChange(e, setSignupData)}
                required
              />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={signupData.password}
                onChange={(e) => handleInputChange(e, setSignupData)}
                required
              />
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </form>
            <button className="next-btn" onClick={handleNext}>
              Already have an account? Login
            </button>
=======
              <h1 className='head'>Welcome Back to <span className='span'>VOYAGE VISTA !</span></h1><br></br>
              <h2 className='head'>The adventure continues here. <span className='span'>Log in </span>to pick up where you left off and chart new destinations!</h2>
            </div>
            {currentPage === 2 && (
              <button className="back-btn" onClick={handleBack}>BACK</button>
            )}
          </div>
          <div className="front">
            <h2 className='login-head'>Sign Up</h2>
            <form>
              <input className='input' type="text" placeholder="Username" required />
              <input className='input' type="email" placeholder="Email" required />
              <input className='input' type="password" placeholder="Password" required />
              <button type="submit" className="submit-btn">Sign Up</button>
            </form>
            {currentPage === 1 && (
              <button className="next-btn" onClick={handleNext}>Don't have an account? Sign Up</button>
            )}
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
          </div>
        </div>

        <div className={`flip ${currentPage === 2 ? 'active' : 'inactive'}`} id="p2">
          <div className="back">
            <div className="welcome-message">
<<<<<<< HEAD
              <h1 className="head">
                Welcome to <br /> <span className="span">VOYAGE VISTA !</span>
              </h1>
              <br />
              <h2 className="head">
                Adventure Awaits! <span className="span">Sign up</span> now to start planning your next trip and stay
                updated on exciting travel opportunities.
              </h2>
            </div>
          </div>
          <div className="front">
            <h2 className="login-head">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => handleInputChange(e, setLoginData)}
                required
              />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => handleInputChange(e, setLoginData)}
                required
              />
              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
            <button className="back-btn" onClick={handleBack}>
              Don't have an account? Sign Up
            </button>
=======
              <h1 className='head'>Welcome to <br></br> <span className='span'>VOYAGE VISTA !</span></h1><br></br>
              <h2 className='head'>Adventure Awaits! <span className='span'>Sign up</span> now to start planning your next trip and stay updated on exciting travel opportunities.</h2>
            </div>
            {currentPage === 2 && (
              <button className="back-btn" onClick={handleBack}>Already have an account? Login</button>
            )}
          </div>
          <div className="front">
            <h2 className='login-head'>Login</h2>
            <form>
              <input className='input' type="text" placeholder="Username" required />
              <input className='input' type="password" placeholder="Password" required />
              <button type="submit" className="submit-btn">Login</button>
            </form>
            {currentPage === 1 && (
              <button className="next-btn" onClick={handleNext}>Don't have an account? Sign Up</button>
            )}
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
