import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types'; 

// returns an array of Links
const Links = ({links}) => {
  return links.map((link) => {
    return <Link to={link.to} key={link.key}>{link.text}</Link>;
  });
};

function Header({title, links}) {
  return (
    <header className="masthead">
      <p>the personal website of</p>
      <h1>{title}</h1>
      <nav>
        <Links links={links}/>
      </nav>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array,
};

export default Header; 