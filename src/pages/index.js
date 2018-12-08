import React from 'react';
import Header from '../components/header';
import Card from '../components/card'; 

export default class Index extends React.Component {
  render() {
    let navLinks = [
      { 
        to: '/about', 
        text: 'about', 
        key: 'about',
      }, 
      {
        to: '/projects',
        text: 'projects',
        key: 'projects',
      }, 
      {
        to: '/contact',
        text: 'contact',
        key: 'contact',
      },
    ];

    return (
      <div>
        <Header title="david yearwood" links={navLinks}/>
        <Card 
          imgs={[]}
          title="Calendar App"
          link={{ 
            type: 'A', 
            to: 'https://github.com/dayvod/calendar-app', 
            text: 'Read on Github',
          }}
        >
          <p className="card__text">
            I created a calendar application to learn React, 
            Redux, and code organization.
          </p>
        </Card>
      </div>
    );
  }
}