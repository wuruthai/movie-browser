import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Content from "./layout/Content"
import Navbar from "./layout/Navbar";
import data from './constants/data'


export default function App() {
  const getData = type => data.entries.filter(item => item.programType === type)
  const routes = data.entries.reduce((acc, curr) => {
    return [...acc, curr.programType]
  }, [])
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Content/>
        </Route>
        {
          routes.map((route, index) => {
            return (
            <Route path={ "/" + route } key={ 'route' + route + index }>
              <Content data={ getData(route) } />
            </Route>
            )
          })
        }
      </Switch>
    </Router>
  );
}