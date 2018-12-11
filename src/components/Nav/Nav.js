import React from 'react';
import { Link } from 'gatsby';
import './style.css'; 

const Links = ({links}) => {
  return links.map((link) => {
    return (
      <Link 
        to={link.to} 
        key={link.key} 
        className="nav__link">
        {link.text}
      </Link>);
  });
};

function Nav({links}) {
  return (
    <nav>
      <Links links={links}/>
    </nav>
  );
}

export default Nav; 