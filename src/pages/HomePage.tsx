import React from 'react';

import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <p className="welcomeText">Hi, Welcome!</p>
      <header className="fullNameText">Jason Chiang</header>
      <p className="subheadingText">
        Self-taught software engineer through research & development
      </p>
    </div>
  );
};

export default HomePage;
