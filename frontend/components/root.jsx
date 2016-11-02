import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './home';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';

const Root = ({store}) => (

  // function redirectIfLoggedIn() {
  //   if
  // }
  //
  // function redirectIfNotLoggedIn() {
  //
  // }

  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Home} />
      <Route path='/login' component={LoginFormContainer} />
      <Route path='/signup' component={SignupFormContainer} />
    </Router>
  </Provider>

);

export default Root;
