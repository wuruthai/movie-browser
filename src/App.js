import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { entries } from './constants/data'

import Content from './layout/Content'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

export default function App() {
   // expression for check data type
   const checkType = (item, type) => item.programType === type

   // get data that gave type
   const getData = type => entries.filter(item => checkType(item, type))

   // create routes like data for use routes and listing types
   const getRoutes = () =>
      entries.reduce((acc, curr) => {
         return acc.some(item => checkType(item, curr.programType))
            ? acc
            : [...acc, { ...curr, title: curr.programType }]
      }, [])

   return (
      <Router>
         <Navbar />
         <Switch>
            <Route path="/" exact>
               <Content data={getRoutes()} />
            </Route>
            {getRoutes().map((route, index) => {
               return (
                  <Route
                     path={`/${route.programType}`}
                     key={`route${route.programType}${index}`}
                  >
                     <Content data={getData(route.programType)} showFilters />
                  </Route>
               )
            })}
         </Switch>
         <Footer />
      </Router>
   )
}
