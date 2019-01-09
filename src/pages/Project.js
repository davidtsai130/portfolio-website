import React, { Component } from 'react'
import ImageCarousel from '../components/display/ImageCarousel'
import { PROJECTS } from '../constants/projects'

class Project extends Component {
  render() {
    const project = PROJECTS.filter(
      project => project.pathName === this.props.match.params.project
    )
    return (
      <div className="container">
        <div className="header-padding">
          <h1 className="text-centered">{project[0].name}</h1>
        </div>
        <ImageCarousel pathName={this.props.match.params.project} />
        <div className="project-description">
          <h4>{project[0].appDesc}</h4>
        </div>
      </div>
    )
  }
}

export default Project
