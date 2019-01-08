import React, { Component } from 'react'
import ImageCarousel from '../components/display/ImageCarousel'

class Project extends Component {
  render() {
    return (
      <div>
        <ImageCarousel pathName={this.props.match.params.project} />
      </div>
    )
  }
}

export default Project
