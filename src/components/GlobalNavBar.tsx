import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/GlobalNavBar.css';

const GlobalNavBar = () => {
  return (
    <nav className="navigationContainer">
      <Link to="/" className="linkText">
        Home
      </Link>
      <Link to="/blog" className="linkText">
        Blog
      </Link>
    </nav>
  );
};

export default GlobalNavBar;
