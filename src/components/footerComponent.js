import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
    			<div className="container">
    				<div className="row">

              <div className="col-sm-3 col-md-3 col-lg-3">
    						<div className="footer-copyright">
    							<p>© 2016 David Tsai</p>
                </div>
    					</div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="social-bookmark animated">
        					<a href=""><i className="fa fa-facebook-square"></i></a>
        					<a href=""><i className="fa fa-linkedin-square"></i></a>
        					<a href=""><i className="fa fa-instagram"></i></a>
                  <a href=""><i className="fa fa-github-square"></i></a>
        				</div>
              </div>

    				</div>
    			</div>
    		</footer>
      </div>
    )
  }
}

export default FooterComponent
