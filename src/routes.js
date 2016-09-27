import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LandingContainer from './containers/landingContainer'
import PortfolioContainer from './containers/portfolioContainer'
import AboutContainer from './containers/aboutContainer'
import ContactContainer from './containers/contactContainer'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingContainer} />
    <Route path='/portfolio' component={PortfolioContainer} />
    <Route path='/about' component={AboutContainer} />
    <Route path='/contact' component={ContactContainer} />
  </Route>
);
