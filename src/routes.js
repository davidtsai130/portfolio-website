import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LandingContainer from './containers/landingContainer'
import PortfolioContainer from './containers/portfolioContainer'
import PortfolioComponent from './components/portfolioComponent'
import AboutContainer from './containers/aboutContainer'
import ContactContainer from './containers/contactContainer'
import FlatironGoComponent from './components/flatironGoComponent'
import MapMyRepoComponent from './components/mapMyRepoComponent'
import SellifyComponent from './components/sellifyComponent'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingContainer} />
    <Route path="portfolio" component={PortfolioContainer}>
      <IndexRoute component={PortfolioComponent} />
      <Route path="flatiron-go" component={FlatironGoComponent} />
      <Route path="mapmyrepo" component={MapMyRepoComponent} />
      <Route path="sellify" component={SellifyComponent} />
    </Route>
    <Route path="about" component={AboutContainer} />
    <Route path="contact" component={ContactContainer} />
  </Route>
);
