import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router'
import ProjectComponent from '../components/projectComponent'

class PortfolioContainer extends Component {
  constructor(props){
  super(props)
  this.state = {projects: [{'Flatiron Go': 'Meetup Planner'},
                           {'Map My Repo': 'Find out stuff'},
                           {'Sellify': 'Sell stuff'}]
                }
  }

  mapProjects() {
    return (this.state.projects.map( (project, idx) => {
      return <ProjectComponent {...project} key={idx} />
    }))
  }

  render() {
    return (
      <div>
        {this.mapProjects()}
      </div>
    )
  }
}

export default PortfolioContainer
