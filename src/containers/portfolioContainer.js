import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router'
import ProjectComponent from '../components/projectComponent'

class PortfolioContainer extends Component {
  constructor(props){
  super(props)
  this.state = {projects: [{name: 'Flatiron Go', pathName: 'flatiron-go', description: 'Meetup planner for the Flatiron School community', github: 'https://github.com/gracejuster/flatiron-go'},
                           {name: 'Map My Repo', pathName: 'mapmyrepo', description: 'Find out where your contributors are from', github: 'https://github.com/greatermeans/mapmyrepo'},
                           {name: 'Sellify', pathName: 'sellify', description: 'Buy and sell things within organizations', github: 'https://github.com/greatermeans/sellify'}]
                }
  }

  mapProjects() {
    return (this.state.projects.map( (project, idx) => {
      return <ProjectComponent project={project} key={idx} location={this.props.location.pathname}/>
    }))
  }

  render() {
    return (
      <div>
        <h1> portfolio </h1>
        <Grid id="portfolio_list">
          <Row>
            {this.mapProjects()}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PortfolioContainer
