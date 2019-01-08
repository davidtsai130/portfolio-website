import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'

class AboutComponent extends Component {
  handleSkills(column) {
    return column.map((skill, idx) => {
      return <li key={idx}>{skill}</li>
    })
  }

  render() {
    return (
      <div>
        <h1> about me </h1>
        <br />
        <Grid id="about_me">
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <p>
                After graduating from Rutgers Business School in May 2016 with a
                B.S. in Business Analytics and Information Technology, I went on
                to complete the Web Development Immersive course at{' '}
                <a
                  href="https://flatironschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flatiron School
                </a>{' '}
                in August 2016.
              </p>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <p>
                I&#39;m a full stack web developer that is passionate about
                learning and implementing new technologies. I specialize in
                Rails and React JS/Redux. Check out{' '}
                <Link to="/portfolio"> my portfolio </Link> to see some of the
                web applications I have worked on.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <h3>Skills</h3>
              <Row>
                <Col id="first" xs={4} sm={4} md={4} lg={4}>
                  <ul>{this.handleSkills(this.props.first)}</ul>
                </Col>
                <Col id="second" xs={4} sm={4} md={4} lg={4}>
                  <ul>{this.handleSkills(this.props.second)}</ul>
                </Col>
                <Col id="third" xs={4} sm={4} md={4} lg={4}>
                  <ul>{this.handleSkills(this.props.third)}</ul>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <h3> Interests </h3>
              <ul>
                <li>cars and motorcycles</li>
                <li>digital and film photography</li>
                <li>snowboarding</li>
                <li>video games</li>
                <li>DIY projects</li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default AboutComponent
