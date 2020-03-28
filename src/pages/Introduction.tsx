import React from 'react';

import { FaAngleDoubleDown } from 'react-icons/fa';

import IconLink from '../components/IconLink';

import '../styles/Introduction.css';
import EmphasizedText from '../components/EmphasizedText';

const Introduction = () => {
  const onClick = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="introductionContainer">
      <div className="textContainer">
        {/* <p className="welcomeText">Hey, Welcome!</p> */}
        <EmphasizedText fontSize="2.5em" underline strong>
          *Hey, Welcome!
        </EmphasizedText>
        <header className="fullNameText">Jason Chiang</header>
        <p className="subheadingText">
          <EmphasizedText strong color="#093820">
            Self-taught
          </EmphasizedText>{' '}
          software engineer through research & development.
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
          <EmphasizedText boxedStyle fontSize="1.8em">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:chiangjason19@gmail.com?subject="
            >
              Lets Connect!
            </a>
          </EmphasizedText>
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
