import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navStyle = {
    backgroundColor: '#333',
    padding: '1rem',
    marginBottom: '2rem'
  };

  const ulStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '2rem'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#007bff'
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <Link 
            to="/" 
            style={location.pathname === '/' ? activeLinkStyle : linkStyle}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/resume" 
            style={location.pathname === '/resume' ? activeLinkStyle : linkStyle}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;