import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Content from "./layout/Content"
import Navbar from "./layout/Navbar";
import { entries } from './constants/data'


export default function App() {
  // Only this component know what's going on, data flows up to down

  // expression for check data type
  const checkType = (item, type) => item.programType === type

  // get data that gave type
  const getData = type => entries.filter(item => checkType(item, type))

  // create routes like data for use routes and listing types
  const getRoutes = () => entries.reduce((acc, curr) => {
    return acc.some(item => checkType(item, curr.programType)) ?
    acc :
    [...acc, { ...curr, title: curr.programType }]
  }, [])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Content data={ getRoutes() } />
        </Route>
        {
          getRoutes().map((route, index) => {
            return (
            <Route
              path={ "/" + route.programType }
              key={ 'route' + route.programType + index }
            >
              <Content data={ getData(route.programType) } />
            </Route>
            )
          })
        }
      </Switch>
    </Router>
  );
}