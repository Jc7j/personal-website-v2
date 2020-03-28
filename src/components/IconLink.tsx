import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import '../styles/IconLink.css';
type iconType = 'github' | 'linkedin' | 'resume' | 'email';

interface IconLinkProps {
  href: string;

  icon: iconType;
  fontSize?: string;
}

const IconLink = (props: IconLinkProps) => {
  const { icon, fontSize = '3em', href } = props;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontSize: fontSize }}
    >
      {icon === 'github' && <FaGithub />}
      {icon === 'linkedin' && <FaLinkedin />}
      {icon === 'email' && <MdEmail />}
      {icon === 'resume' && (
        <div className="resumeIconContainer">
          <span className="resumeText">CV</span>
        </div>
      )}
    </a>
  );
};

export default IconLink;
