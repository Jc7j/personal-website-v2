import React from 'react';

import IconLink from '../components/IconLink';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="linksContainer">
        <IconLink
          icon="linkedin"
          href="https://www.linkedin.com/in/jasonchiangjc7j/"
        />
        <IconLink icon="github" href="https://github.com/Jc7j" />
        <IconLink icon="email" href="mailto:chiangjason19@gmail.com?subject=" />
        <IconLink
          icon="resume"
          href={process.env.PUBLIC_URL + '/Resume.pdf'}
          fontSize="1.5em"
        />
      </div>
    </div>
  );
};

export default Footer;
