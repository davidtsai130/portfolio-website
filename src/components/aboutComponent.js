import React, { Component } from 'react';
import { Link } from 'react-router';

class AboutComponent extends Component {
  render() {
    return (
      <div>
        <h1> about me </h1>
          <br/>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <p>
              After graduating from Rutgers Business School in May 2016 with a B.S. in Business Analytics and Information Technology, I went on to complete the Web Development Immersive course at <a href="https://flatironschool.com/" target="_blank">Flatiron School</a> in August 2016.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <p>
              I&#39;m a full stack web developer that is passionate about learning and implementing new technologies. I specialize in Rails and React JS/Redux. Check out <Link to="/portfolio"> my portfolio </Link> to see some of the web applications I have worked on and developed.
            </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <h3>Skills</h3>
          <ul>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>Javascript</li>
            <li>Jquery</li>
            <li>MySql</li>
            <li>Postgres</li>
            <li>Rails</li>
            <li>React</li>
            <li>Redux</li>
            <li>Ruby</li>
            <li>Sinatra</li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <h3> Interests </h3>
          <ul>
            <li>cars and motorcycles</li>
            <li>digital and film photography</li>
            <li>snowboarding</li>
            <li>video games</li>
            <li>DIY projects</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutComponent
