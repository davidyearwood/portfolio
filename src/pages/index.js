import React from 'react';
import Header from '../components/Header/Header';
import Card from '../components/card'; 
import Layout from '../components/Layout/Layout';
import reactIcon from '../images/react-icon.svg';
import reduxIcon from '../images/redux-icon.svg'; 
import '../styles/section.css';

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
    let calendarIcons = [
      {src: reactIcon, alt: ''}, 
      {src: reduxIcon, alt: ''},
    ];

    return (
      <Layout>
        <Header title="david yearwood" links={this.navLinks}/>
        <div>
          <p className="intro">
            What’s up, the name is David. I am a Web Development 
            Specialist currently migrating our LMS to a new home, 
            and redesigning its UI. 
          </p>
        </div>
        <section className="section">
          <h2 className="section__title">Projects</h2>
          <Card 
            imgs={calendarIcons}
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
          <Card 
            imgs={calendarIcons}
            title="Finance App"
            link={{ 
              type: 'A', 
              to: 'https://github.com/dayvod/c-75_project_1', 
              text: 'Read on Github',
            }}
          >
            <p className="card__text">
              A web application that allows users to manage 
              portfolios of stocks. I used several shiny new 
              technologies to build this site, and it took a longer time 
              than expected. The backend, frontend, and design was all 
              built by me. 
            </p>
          </Card>
          <Card 
            imgs={calendarIcons}
            title="ISMIE’S Risk Management Symposium"
            link={{ 
              type: 'A', 
              to: 'https://www.ismierms.com/', 
              text: 'Go to website',
            }}
          >
            <p className="card__text">
              I had the privilege to work on the first 
              ever formed committee around this event, and 
              build the mobile friendly website to promote it. 
            </p>
          </Card>
        </section>
        <section className="section">
          <h2 className="section__title">About me</h2>
          <p className="intro">
            I’ve been a fan of the internet since using PHP 
            for my senior project back in  college. Initially oscilliating 
            between the back end and front end. After attending Smashing 
            Conference 2018, I decided to focus only on the front end. Good-bye 
            to the never ending debates on the perfect back-end 
            language and hello to front-end framework wars. When I am 
            not working between the hours of 9 to 5, I am  
          </p>
        </section>
      </Layout>
    );
  }
}