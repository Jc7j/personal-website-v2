import React from 'react';

import Introduction from './Introduction';
import About from './About';

import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <Introduction />
      <About />
    </div>
  );
};

export default HomePage;
