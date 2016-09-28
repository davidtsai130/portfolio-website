import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
    			<div className="container">
    				<div className="row">

              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
    						<div className="footer-copyright">
    							<p>© 2016 David Tsai</p>
                </div>
    					</div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="social-bookmark animated">
                  <a href="https://github.com/davidtsai130" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
        					<a href="https://www.facebook.com/tsai.david" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
        					<a href="https://www.linkedin.com/in/david-tsai-33819a60" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        					<a href="https://www.instagram.com/daviddtsaii/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                  <a href="https://medium.com/@david.tsai" target="_blank"><i className="fa fa-medium" aria-hidden="true"></i></a>
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
