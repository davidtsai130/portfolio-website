import React, { Component } from 'react'
import { SKILLS } from '../constants/skills'
import { Grid, Row } from 'react-bootstrap'

import AboutMe from '../components/display/AboutMe'
import Skills from '../components/display/Skills'
import Interests from '../components/display/Interests'

class AboutContainer extends Component {
  render() {
    const arrayLength = SKILLS.length
    let i
    let skillOne = []
    let skillTwo = []
    let skillThree = []

    for (i = 0; i < arrayLength; i++) {
      const section = Math.ceil(arrayLength / 3)
      if (skillOne.length !== section) {
        skillOne.push(SKILLS[i])
      } else if (skillTwo.length !== section) {
        skillTwo.push(SKILLS[i])
      } else {
        skillThree.push(SKILLS[i])
      }
    }

    return (
      <div className="container container-margin">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1>about me</h1>
            <br />
            <Grid id="about_me">
              <AboutMe />
              <Row>
                <Skills first={skillOne} second={skillTwo} third={skillThree} />
                <Interests />
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutContainer
