import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import ProjectItem from '../components/display/ProjectItem'
import { PROJECTS } from '../constants/projects'

class PortfolioContainer extends Component {
  get mapProjects() {
    return PROJECTS.map((project, i) => {
      return <ProjectItem project={project} key={i} />
    })
  }

  render() {
    return (
      <div className="container container-margin">
        <h1> portfolio </h1>
        <Grid id="portfolio_list">
          <Row>{this.mapProjects}</Row>
        </Grid>
      </div>
    )
  }
}

export default PortfolioContainer
