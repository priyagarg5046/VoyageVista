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
          </div>
        </div>

        <div className={`flip ${currentPage === 2 ? 'active' : 'inactive'}`} id="p2">
          <div className="back">
            <div className="welcome-message">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
