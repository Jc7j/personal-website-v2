import React from 'react';

import { FaAngleDoubleDown } from 'react-icons/fa';

import IconLink from '../components/IconLink';

import '../styles/Introduction.css';

const Introduction = () => {
  return (
    <div className="introductionContainer">
      <div className="textContainer">
        <p className="welcomeText">Hi, Welcome!</p>
        <header className="fullNameText">Jason Chiang</header>
        <p className="subheadingText">
          Self-taught software engineer through research & development
        </p>
        <div className="linksContainer">
          <IconLink
            icon="linkedin"
            href="https://www.linkedin.com/in/jasonchiangjc7j/"
          />
          <IconLink icon="github" href="https://github.com/Jc7j" />
          <IconLink
            icon="email"
            href="mailto:chiangjason19@gmail.com?subject="
          />
          <IconLink
            icon="resume"
            href={process.env.PUBLIC_URL + '/Resume.pdf'}
            fontSize="1.5em"
          />
        </div>
      </div>
      <div className="readMoreContainer">
        <p>Read More</p>
        <FaAngleDoubleDown />
      </div>
    </div>
  );
};

export default Introduction;
