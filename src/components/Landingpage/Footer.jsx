import React from 'react'
import './Footer.scss';
const Footer= () => {
  return (
    <footer className='footer'>
        <div className='links'>
            <a href=""><i className='fab fa-twitter'></i></a>
            <a href=""><i className='fab fa-linkedin'></i></a>
            <a href=""><i className='fab fa-github'></i></a>
            <a href=""><i className='fab fa-instagram'></i></a>
        </div>
        <div className="copyright">
            <p>&copy; {new Date().getFullYear()} JOB-BLENDR. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
