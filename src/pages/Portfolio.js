import React from 'react'
import { Grid, Row } from 'react-bootstrap'

import ProjectItem from '../components/display/ProjectItem'
import { PROJECTS } from '../constants/projects'

const PortfolioContainer = () => {
  const mapProjects = () =>
    PROJECTS.map((project, i) => <ProjectItem project={project} key={i} />)

  return (
    <div className="container container-margin">
      <h1> portfolio </h1>
      <Grid id="portfolio_list">
        <Row>{mapProjects()}</Row>
      </Grid>
    </div>
  )
}

export default PortfolioContainer
