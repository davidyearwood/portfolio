import React from 'react';
import PropTypes from 'prop-types'; 
import Nav from '../Nav/Nav';
import './style.css';

function Header({title, links}) {
  return (
    <header className="masthead">
      <p className="masthead__eyebrow">the personal website of</p>
      <h1 className="masthead__title">{title}</h1>
      <Nav links={links} />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array,
};

export default Header; 