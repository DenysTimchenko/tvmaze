import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import Routes from "./routes";
const App = () => (
  <div className="container fluid pt-4">
    <Router>
      <Navbar />
      <Switch>
        <Routes />
      </Switch>
    </Router>
  </div>
)

export default App;
