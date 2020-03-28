import React from 'react';

import About from './About';
import Footer from './Footer';
import Introduction from './Introduction';

import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <Introduction />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
