import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
