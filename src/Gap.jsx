// all components of landing page are here

import React from 'react'
import Landingpage from './components/Landingpage/Landingpage'
import Navbar from './components/Landingpage/Navbar';
import Footer from './components/Landingpage/Footer';

function Gap() {
  const handlelogin= () => {
    console.log('login clicked');
  };
  return (
    <div>
      <Navbar onLoginClick={handlelogin}/>
      <Landingpage />
      <Footer />
    </div>
  )
}

export default Gap;
