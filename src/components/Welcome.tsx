import React from 'react';

import '../styles/Welcome.css';

const Welcome = () => {
  return (
    <div className="welcomeContainer">
      <p className="welcomeText">Hi, Welcome!</p>
      <header className="fullNameText">Jason Chiang</header>
      <p className="subheadingText">
        Self-taught software engineer through research & development
      </p>
    </div>
  );
};

export default Welcome;
