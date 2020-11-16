import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/home'
import About from './views/about'
import MarketingAssets from './views/marketing-assets'
import OurWork from './views/our-work'
import WebDev from './views/web-development'
import MotionGraphics from './views/motion-graphics'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ourteam" component={About} />
        <Route exact path="/marketingassets" component={MarketingAssets} />
        <Route exact path="/ourwork" component={OurWork} />
        <Route exact path="/webdevelopment" component={WebDev} />
        <Route exact path="/motiongraphics" component={MotionGraphics} />
      </Switch>
    </Router>
  )
}

export default App
