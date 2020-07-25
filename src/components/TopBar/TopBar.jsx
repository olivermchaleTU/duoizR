import React from 'react';
import './TopBar.scss';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-text">
        duoizR
      </Link>
    </div>
  );
};

export default TopBar;
