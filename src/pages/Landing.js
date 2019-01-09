import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

class Landing extends Component {
  render() {
    return (
      <div className="container container-margin">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Grid>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <h1>
                    Hey, my name David.
                    <br />
                    I&#39;m a Frontend Developer. <br />
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
        </div>
      </div>
    )
  }
}

export default Landing
