import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import Header from './header/'
import Home_page from "./home";
import Login from "./login";
import Profile from "./account";
import Basket from "./basket";
import Desserts from "./desserts";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Registration from "./registration";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Route exact path="/">
                  <Home_page/>
              </Route>
              <Route exact component={Profile} path="/profile"/>
              <Route exact component={Login} path="/login"/>
              <Route exact component={Registration} path="/registration"/>
              <Route exact component={Desserts} path="/desserts"/>
              <Route exact component={Basket} path="/basket"/>
          </div>
      </Router>
  );
}

export default App;
