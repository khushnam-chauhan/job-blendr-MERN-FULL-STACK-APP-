import React from 'react'
import './Navbar.scss'
import logo from '../Landingpage/assets/logo.jpg'
import propTypes from 'prop-types'
const Navbar= ({onLoginClick}) => {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            {/* <img src={'logo'} alt="logo" /> */}
            <h2 className='logo-head'>JOB-BLENDR</h2>
        </div>
        <div className="navbar-links">
            <button className="btn" onClick={onLoginClick}>
                LOGIN / SIGN UP
            </button>
        </div>
      
    </div>
  );
}

Navbar.propTypes ={
    onLoginClick: propTypes.func.isRequired,
};

export default Navbar;
