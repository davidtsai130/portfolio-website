import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/css/style.css'
import './assets/font-awesome-4.6.3/css/font-awesome.min.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingContainer from './containers/LandingContainer'

import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={LandingContainer} />
          <Switch>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/portfolio/:project" component={Portfolio} />
          </Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
