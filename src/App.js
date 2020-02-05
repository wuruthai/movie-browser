import React from "react";
import {
  BrowserRouter as Router,Switch,Route
} from "react-router-dom";
import Home from "./pages/Content"

import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/list">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}