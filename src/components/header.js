import React from "react"
import { Link } from 'gatsby'

function Header() {
  return(
    <header>
      <h2>the personal website of</h2>
      <h1>david yearwood</h1>
      <nav>
        <Link to="/about">about</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
      </nav>
    </header>
  );
}

export default Header; 