import React from "react";
import Home from "./components/Home.js";
import NewCapsule from "./components/NewCapsule.js";
import Nearby from "./components/Nearby.js";
import Capsule from "./components/Capsule.js";

// import styles
import './styles/index.css';
import './styles/Navigation.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/capsule/new" component={NewCapsule}/>
        <Route exact path="/nearby" component={Nearby}/>
        <Route exact path="/capsule/:id" component={Capsule}/>
      </Switch>
    </Router>
  );
}

export default App;
