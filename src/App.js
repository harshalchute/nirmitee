import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import './App.css';

// import PrivateRoute from "./components/HOC/PrivateRoute";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Profile from './containers/Profile';

// import { isUserLoggedIn } from "./actions";

const App = () => {

  // const dispatch = useDispatch();
  // const user = useSelector(state => state.user);

  // useEffect(() => {
  //   if (!user.authenticate) {
  //     dispatch(isUserLoggedIn())
  //   }
  // }, [user.authenticate])

  return (<Switch>
    {/* <PrivateRoute path='/' exact component={Home} />
    <PrivateRoute path='/profile' component={Profile} /> */}
    <Route path='/' exact component={Home} />
    <Route path='/profile' component={Profile} />

    <Route path='/Login' component={Login} />
  </Switch>);
}

export default App;