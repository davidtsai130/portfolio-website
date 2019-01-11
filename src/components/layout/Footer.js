import React, { Component } from 'react'

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="footer-copyright">
                  <p className="alignleft">
                    &copy; {new Date().getFullYear()} David Tsai
                  </p>
                  <p className="aligncenter social-bookmark animated">
                    <a
                      href="https://github.com/davidtsai130"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.facebook.com/tsai.david"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tsai-david"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.instagram.com/daviddtsaii/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </p>
                  <p className="alignright">
                    Built with React JS |{' '}
                    <a
                      href="https://github.com/davidtsai130/portfolio-website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Site Repository
                    </a>
                  </p>
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
