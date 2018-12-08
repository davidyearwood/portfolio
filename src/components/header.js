import React from 'react';
import { Link } from 'gatsby';

// returns an array of Links
const Links = ({links}) => {
  return links.map((link) => {
    return <Link to={link.to}>{link.text}</Link>;
  });
};

function Header({title, links}) {
  return (
    <header>
      <p>the personal website of</p>
      <h1>{title}</h1>
      <nav>
        <Links links={links}/>
      </nav>
    </header>
  );
}

export default Header; 