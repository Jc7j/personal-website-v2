import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

import './styles/App.css';

const App = () => {
  return (
    <Router>
      <main>
        <nav className="navigationContainer">
          <Link to="/" className="linkText">
            Home
          </Link>
          <Link to="/blog" className="linkText">
            Blog
          </Link>
        </nav>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/blog" exact component={BlogPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
    </Router>
  );
};

export default App;
