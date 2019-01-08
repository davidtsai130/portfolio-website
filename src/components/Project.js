import React, { Component } from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Project extends Component {
  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={6} className="pitem">
        <div className="hovereffect">
          <Image
            className="portfolio_item"
            src={require(`../assets/img/portfolio/${
              this.props.project.pathName
            }/image1.png`)}
          />
          <div className="overlay">
            <h2>{this.props.project.name}</h2>
            <p>{this.props.project.description}</p>
            <Link
              to={{
                pathname: `portfolio/${this.props.project.pathName}`,
                state: { modal: true, returnTo: this.props.location }
              }}
            >
              Images
            </Link>
            <br />
            <a
              href={this.props.project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repository{' '}
            </a>
          </div>
        </div>
      </Col>
    )
  }
}

export default Project
