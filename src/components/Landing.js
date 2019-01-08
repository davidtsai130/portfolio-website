import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

class Landing extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>
                Hello, my name David Tsai.
                <br />
                I&#39;m a Full Stack Web Developer. <br />
              </h1>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Image
                className="my-picture"
                src={require('../assets/img/me.jpg')}
                alt=""
                circle
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Landing
