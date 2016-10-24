import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LandingContainer from './containers/landingContainer'
import PortfolioPageContainer from './containers/portfolioPageContainer'
import PortfolioContainer from './containers/portfolioContainer'
import AboutContainer from './containers/aboutContainer'
import ContactContainer from './containers/contactContainer'
import FlatironGoModalComponent from './components/projects/flatirongo/flatironGoModalComponent'
import MapMyRepoModalComponent from './components/projects/mapmyrepo/mapMyRepoModalComponent'
import SellifyModalComponent from './components/projects/sellify/sellifyModalComponent'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingContainer} />
    <Route path="portfolio" component={PortfolioPageContainer}>
      <IndexRoute component={PortfolioContainer} />
      <Route path="flatiron-go" component={FlatironGoModalComponent} />
      <Route path="mapmyrepo" component={MapMyRepoModalComponent} />
      <Route path="sellify" component={SellifyModalComponent} />
    </Route>
    <Route path="about" component={AboutContainer} />
    <Route path="contact" component={ContactContainer} />
  </Route>
);
