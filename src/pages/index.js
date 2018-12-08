import React from 'react';
import Header from '../components/header';

export default class Index extends React.Component {
  render() {
    let navLinks = [
      { 
        to: '/about', 
        text: 'about', 
      }, 
      {
        to: '/projects',
        text: 'projects',
      }, 
      {
        to: '/contact',
        text: 'contact',
      },
    ];

    return (
      <Header title="david yearwood" links={navLinks}/>
    );
  }
}