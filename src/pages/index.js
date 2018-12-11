import React from 'react';
import Header from '../components/Header/Header';
import Card from '../components/card'; 
import Layout from '../components/Layout/Layout';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.navLinks = [
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
  }
  
  render() {
    return (
      <Layout>
        <Header title="david yearwood" links={this.navLinks}/>
        <div>
          <p>
            What’s up, the name is David. I am a Web Development 
            Specialist currently migrating our LMS to a new home, and redesigning its UI. 
          </p>
        </div>
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
      </Layout>
    );
  }
}