import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/css/style.scss'
import './assets/font-awesome-4.6.3/css/font-awesome.min.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Portfolio from './pages/Portfolio'
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/portfolio/:project" component={Project} />
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
