import React from 'react';

import { FaAngleDoubleDown } from 'react-icons/fa';

import IconLink from '../components/IconLink';

import '../styles/Introduction.css';

const Introduction = () => {
  const onClick = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="introductionContainer">
      <div className="textContainer">
        <p className="welcomeText">Hey, Welcome!</p>
        <header className="fullNameText">Jason Chiang</header>
        <p className="subheadingText">
          <strong style={{ color: '#093820' }}>Self-taught</strong> software
          engineer through research & development.
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
      <button
        onClick={() => onClick('aboutContainer')}
        className="readMoreContainer"
      >
        <p>Read More</p>
        <FaAngleDoubleDown />
      </button>
    </div>
  );
};

export default Introduction;
