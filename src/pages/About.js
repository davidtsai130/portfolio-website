import React, { Component } from 'react'
import AboutComponent from '../components/aboutComponent'

class AboutContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: [
        'CSS3',
        'HTML5',
        'Javascript',
        'Jquery',
        'MySQL',
        'Postgres',
        'Rails',
        'React',
        'Redux',
        'Ruby',
        'Sinatra'
      ],
      skillOne: [],
      skillTwo: [],
      skillThree: []
    }
  }

  componentWillMount() {
    this.organizeSkills()
  }

  organizeSkills() {
    var arrayLength = this.state.skills.length

    for (var i = 0; i < arrayLength; i++) {
      var section = Math.ceil(arrayLength / 3)
      if (this.state.skillOne.length !== section) {
        this.state.skillOne.push(this.state.skills[i])
      } else if (this.state.skillTwo.length !== section) {
        this.state.skillTwo.push(this.state.skills[i])
      } else {
        this.state.skillThree.push(this.state.skills[i])
      }
    }
  }

  render() {
    return (
      <div>
        <div className="container container-margin">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <AboutComponent
                first={this.state.skillOne}
                second={this.state.skillTwo}
                third={this.state.skillThree}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutContainer
