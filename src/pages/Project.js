import React, { Component } from 'react'
import ImageCarousel from '../components/display/ImageCarousel'
import { PROJECTS } from '../constants/projects'

class Project extends Component {
  render() {
    const project = PROJECTS.filter(
      project => project.pathName === this.props.match.params.project
    )
    return (
      <div>
        <h1>{project[0].name}</h1>
        <ImageCarousel pathName={this.props.match.params.project} />
        <h4>{project[0].appDesc}</h4>
      </div>
    )
  }
}

export default Project
