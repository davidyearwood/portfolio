import React from 'react';
import './style.css';

function Layout({children}) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

export default Layout; 