import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class Skills extends Component {
  handleSkills(column) {
    return column.map((skill, idx) => {
      return <li key={idx}>{skill}</li>
    })
  }
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default Skills
