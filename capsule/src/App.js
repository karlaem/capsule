import React from "react";
import Home from "./modules/Home.js";
import Login from "./modules/Login.js";
import Register from "./modules/Register.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
   
      </Switch>
    </Router>
  );
}

export default App;
