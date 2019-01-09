import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

export default function AboutMe() {
  return (
    <div>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          <p>
            After graduating from Rutgers Business School in May 2016 with a
            B.S. in Business Analytics and Information Technology, I went on to
            complete the Web Development Immersive course at{' '}
            <a
              href="https://flatironschool.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flatiron School
            </a>{' '}
            in August 2016. For over the last 2 years, I worked at an influencer
            marketing startup called Reelio as a Frontend Developer. We were
            acquired in April, 2018 by Fullscreen, a media company owned by
            Otter Media, which is owned by AT&T and currently operates under
            WarnerMedia.
          </p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <p>
            I&#39;m passionate about learning and implementing new technologies.
            I specialize in React JS and Redux. Check out{' '}
            <Link to="/portfolio"> my portfolio </Link> to see some of the web
            applications I have worked on.
          </p>
        </Col>
      </Row>
    </div>
  )
}
