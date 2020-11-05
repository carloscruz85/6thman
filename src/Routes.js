import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";
import MarketingAssets from "./views/marketing-assets";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={About} />
        <Route exact path="/marketingassets" component={MarketingAssets} />
      </Switch>
    </Router>
  );
}

export default App;
